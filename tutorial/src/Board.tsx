import * as React from "react";
import { BoardSquare } from "./BoardSquare";
import { Knight } from "./Knight";

export interface BoardProps {
  items: {
    id: string;
    position: number[];
  }[];
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: "12.5%", height: "12.5%" };

/**
 * The chessboard component
 * @param props The react props
 */
const Board: React.FC<BoardProps> = ({ items = [] }) => {
  function renderSquare(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y}>
          {renderPiece(items, x, y)}
        </BoardSquare>
      </div>
    );
  }

  function renderPiece(items: any, x: number, y: number) {
    const item = items.find((item: any) => {
      const [itemX, itemY] = item.position;
      return x === itemX && y === itemY;
    });
    return item ? <Knight name={item.id} position={[x, y]} /> : null;
  }

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }
  return <div style={boardStyle}>{squares}</div>;
};
export default Board;
