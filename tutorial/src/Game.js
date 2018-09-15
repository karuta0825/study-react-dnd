// @flow

const pieces = {
  knightPosition: [1, 7],
  queenPosition: [3, 3],
};
let observer: any = null;

function emitChange() {
  observer(pieces);
}

export function observe(o: (any) => any) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: number, toY: number) {
  pieces.knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX: number, toY: number): boolean {
  const [x, y] = pieces.knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1)
         || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function moveQueen(toX: number, toY: number) {
  pieces.queenPosition = [toX, toY];
  emitChange();
}

export function canMoveQueen(toX: number, toY: number): boolean {
  const [x, y] = pieces.queenPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) > 0 && Math.abs(dy) === 0)
  || (Math.abs(dy) > 0 && Math.abs(dx) === 0)
  || (Math.abs(dx) !== 0 && Math.abs(dy) !== 0 && Math.abs(dx) === Math.abs(dy));
}
