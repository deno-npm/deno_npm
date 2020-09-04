export const merge = (a) =>
  (b) => {
    let c = {};
    for (let key in a) {
      c[key] = a[key];
    }
    for (let key in b) {
      c[key] = b[key];
    }
    return c;
  };

export const remove = (removeKey) =>
  (a) => {
    let b = {};
    for (let key in a) {
      if (key !== removeKey) {
        b[key] = a[key];
      }
    }
    return b;
  };
