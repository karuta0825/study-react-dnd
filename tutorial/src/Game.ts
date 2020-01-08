let knightPosition = [
  { id: "1", position: [1, 7] },
  { id: "2", position: [1, 1] },
  { id: "3", position: [1, 2] },
  { id: "4", position: [1, 3] }
];
let observers: PositionObserver[] = [];
export type PositionObserver = ((position: any) => void) | null;

function emitChange() {
  observers.forEach(o => o && o(knightPosition));
}

export function observe(o: PositionObserver) {
  observers.push(o);
  emitChange();

  // this is called in unmount
  return () => {
    console.log("unmount");
    observers = observers.filter(t => t !== o);
  };
}

export function canMoveKnight(toX: number, toY: number) {
  // const [x, y] = knightPosition;
  // const dx = toX - x;
  // const dy = toY - y;

  // return (
  //   (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
  //   (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  // );
  return true;
}

export function moveKnight(id: string, toX: number, toY: number) {
  // knightPosition = [toX, toY];
  const index = knightPosition.findIndex(pos => pos.id == id);
  const existItem = knightPosition.findIndex(pos => {
    const [x, y] = pos.position;
    return x === toX && y === toY;
  });

  if (existItem === -1) {
    console.log("not exist");
    knightPosition[index] = { id, position: [toX, toY] };
  } else {
    const fromItem = knightPosition[index].position;
    const toItem = knightPosition[existItem].position;
    knightPosition[index].position = toItem;
    knightPosition[existItem].position = fromItem;
    console.log("exist");
  }

  emitChange();
}
