export default function EthereumProvider(url, intercept) {
  intercept = intercept || (() => {});

  let api = {};
  let onResponse = {};
  let callbacks = {};
  let nextId = 0;
  let send;

  const makeSender = (send) => {
    const P = (fn) =>
      (...args) =>
        new Promise((resolve, reject) =>
          fn(...args.concat((err, res) => err ? reject(err) : resolve(res)))
        );
    const sender = (intercept) =>
      (method, params, callback) => {
        const intercepted = intercept(method, params, P(sender(() => {})));
        if (intercepted) {
          intercepted.then((response) => callback(null, response));
        } else {
          send(method, params, callback);
        }
      };
    return sender(intercept);
  };

  const parseResponse = (json_string) => {
    try {
      const json = JSON.parse(json_string);
      onResponse[json.id] && onResponse[json.id](null, json.result);
    } catch (e) {}
  };

  const genPayload = (method, params) => ({
    jsonrpc: "2.0",
    id: ++nextId,
    method: method,
    params: params,
  });

  api.on = (name, callback) => {
    callbacks[name] = callback;
  };

  if (/^ws/.test(url)) {
    const WebSocket = require("w" + "s");
    const ws = new WebSocket(url);
    api.send = makeSender((method, params, callback) => {
      const intercepted = intercept(method, params, P(send(() => {})));
      if (intercepted) {
        intercepted.then((response) => callback(null, response));
      } else {
        const payload = genPayload(method, params);
        onResponse[payload.id] = callback;
        ws.send(JSON.stringify(payload));
      }
    });
    ws.on("message", parseResponse);
    ws.on("open", () => callbacks.connect && callbacks.connect(eth));
    ws.on("close", () => callbacks.disconnect && callbacks.disconnect());
  } else if (/^http/.test(url)) {
    api.send = makeSender((method, params, callback) => {
      fetch(url, {
        body: JSON.stringify(genPayload(method, params)),
        method: "POST",
        headers: {
          "Content-Type": "application/json-rpc",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error();
        })
        .then((answer) => {
          if (answer.error) {
            callback(answer.error.message);
          } else {
            callback(null, answer.result);
          }
        })
        .catch((err) => callback("Couldn't connect to Ethereum node."));
    });

    setTimeout(() => {
      callbacks.connect && callbacks.connect();
    }, 1);
  } else {
    throw "IPC not supported yet.";
  }

  return api;
}
