/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

export const ConnectionError = (msg, event) => {
  const error = new Error(msg);
  if (event) {
    error.code = event.code;
    error.reason = event.reason;
  }

  return error;
};
export const ConnectionTimeout = (ms) => {
  return new Error("CONNECTION TIMEOUT: timeout of " + ms + " ms achived");
};
export const ConnectionCloseError = (event) => {
  if (typeof event === "object" && event.code && event.reason) {
    return ConnectionError(
      "CONNECTION ERROR: The connection got closed with " +
        "the close code `" + event.code + "` and the following " +
        "reason string `" + event.reason + "`",
      event,
    );
  }

  return new Error("CONNECTION ERROR: The connection closed unexpectedly");
};
export const ConnectionNotOpenError = (event) => {
  return ConnectionError("connection not open on send()", event);
};
export const ContractCodeNotStoredError = (receipt) => {
  return TransactionError(
    "The contract code couldn't be stored, please check your gas limit.",
    receipt,
  );
};
export const ContractEventDoesNotExistError = (eventName) => {
  return new Error(
    'Event "' + eventName + "\" doesn't exist in this contract.",
  );
};
export const ContractMissingABIError = () => {
  return new Error(
    "You must provide the json interface of the contract when instantiating a contract object.",
  );
};
export const ContractMissingDeployDataError = () => {
  return new Error(
    'No "data" specified in neither the given options, nor the default options.',
  );
};
export const ContractNoAddressDefinedError = () => {
  return new Error(
    "This contract object doesn't have address set yet, please set an address first.",
  );
};
export const ContractNoFromAddressDefinedError = () => {
  return new Error(
    'No "from" address specified in neither the given options, nor the default options.',
  );
};
export const ContractOnceRequiresCallbackError = () => {
  return new Error("Once requires a callback as the second parameter.");
};
export const ContractReservedEventError = (type) => {
  return new Error(
    'The event "' + type + "\" is a reserved event name, you can't use it.",
  );
};
export const ErrorResponse = (result) => {
  var message = !!result && !!result.error && !!result.error.message
    ? result.error.message
    : JSON.stringify(result);
  var data = (!!result.error && !!result.error.data) ? result.error.data : null;
  var err = new Error("Returned error: " + message);
  err.data = data;
  return err;
};
export const InvalidConnection = (host, event) => {
  return ConnectionError(
    "CONNECTION ERROR: Couldn't connect to node " + host + ".",
    event,
  );
};
export const InvalidNumberOfParams = (got, expected, method) => {
  return new Error(
    'Invalid number of parameters for "' + method + '". Got ' + got +
      " expected " + expected + "!",
  );
};
export const InvalidProvider = () => {
  return new Error("Provider not set or invalid");
};
export const InvalidResponse = (result) => {
  var message = !!result && !!result.error && !!result.error.message
    ? result.error.message
    : "Invalid JSON RPC response: " + JSON.stringify(result);
  return new Error(message);
};
export const MaxAttemptsReachedOnReconnectingError = () => {
  return new Error("Maximum number of reconnect attempts reached!");
};
export const NoContractAddressFoundError = (receipt) => {
  return TransactionError(
    "The transaction receipt didn't contain a contract address.",
    receipt,
  );
};
export const PendingRequestsOnReconnectingError = () => {
  return new Error(
    "CONNECTION ERROR: Provider started to reconnect before the response got received!",
  );
};
export const ResolverMethodMissingError = (address, name) => {
  return new Error(
    "The resolver at " + address + 'does not implement requested method: "' +
      name + '".',
  );
};
export const RevertInstructionError = (reason, signature) => {
  var error = new Error(
    "Your request got reverted with the following reason string: " + reason,
  );
  error.reason = reason;
  error.signature = signature;

  return error;
};
export const TransactionError = (message, receipt) => {
  var error = new Error(message);
  error.receipt = receipt;

  return error;
};
export const TransactionOutOfGasError = (receipt) => {
  return TransactionError(
    "Transaction ran out of gas. Please provide more gas:\n" +
      JSON.stringify(receipt, null, 2),
    receipt,
  );
};
export const TransactionRevertedWithoutReasonError = (receipt) => {
  return TransactionError(
    "Transaction has been reverted by the EVM:\n" +
      JSON.stringify(receipt, null, 2),
    receipt,
  );
};
export const TransactionRevertInstructionError = (
  reason,
  signature,
  receipt,
) => {
  var error = new Error(
    "Transaction has been reverted by the EVM:\n" +
      JSON.stringify(receipt, null, 2),
  );
  error.reason = reason;
  error.signature = signature;
  error.receipt = receipt;

  return error;
};
