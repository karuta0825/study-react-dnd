// @flow

export function observe(receive: (any) => any) {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8),
  ]), 500);
}
