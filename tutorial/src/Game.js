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


function moveKnight(toX: number, toY: number) {
  pieces.knightPosition = [toX, toY];
  emitChange();
}

function canMoveKnight(toX: number, toY: number): boolean {
  const [x, y] = pieces.knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1)
         || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

function moveQueen(toX: number, toY: number) {
  pieces.queenPosition = [toX, toY];
  emitChange();
}

function canMoveQueen(toX: number, toY: number): boolean {
  const [x, y] = pieces.queenPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) > 0 && Math.abs(dy) === 0)
  || (Math.abs(dy) > 0 && Math.abs(dx) === 0)
  || (Math.abs(dx) !== 0 && Math.abs(dy) !== 0 && Math.abs(dx) === Math.abs(dy));
}

export function pieceMoveController(pieceName: string): Object {
  switch (pieceName) {
    case 'knight':
      return {
        move: moveKnight,
        canMove: canMoveKnight,
      };
    case 'queen':
      return {
        move: moveQueen,
        canMove: canMoveQueen,
      };
    default:
      return {
        move: () => {},
        canMove: () => {},
      };
  }
}
