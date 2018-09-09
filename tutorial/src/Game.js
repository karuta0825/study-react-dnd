// @flow

let knightPosition = [0, 0];
let observer: any = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o: (any) => any) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: number, toY: number) {
  knightPosition = [toX, toY];
  emitChange();
}
