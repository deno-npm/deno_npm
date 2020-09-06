export const chunksOf = (n, a) => {
  let b = [];
  for (let i = 0, l = a.length; i < l; i += n) {
    b.push(a.slice(i, i + n));
  }
  return b;
};

export const concat = (a, b) => a.concat(b);

export const flatten = (a) => {
  let r = [];
  for (let j = 0, J = a.length; j < J; ++j) {
    for (let i = 0, I = a[j].length; i < I; ++i) {
      r.push(a[j][i]);
    }
  }
  return r;
};

export const generate = (num, fn) => {
  let a = [];
  for (var i = 0; i < num; ++i) {
    a.push(fn(i));
  }
  return a;
};

export const replicate = (num, val) => generate(num, () => val);
