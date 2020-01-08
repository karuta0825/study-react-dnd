import * as React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";
import { observe } from "./Game";

export interface ChessboardTutorialAppState {
  knightPosition: [number, number];
}

const containerStyle: React.CSSProperties = {
  width: 500,
  height: 500,
  border: "1px solid gray"
};

/**
 * The Chessboard Tutorial Application
 */
const ChessboardTutorialApp: React.FC = () => {
  const [knightPos, setKnightPos] = useState<
    { id: string; position: number[] }[]
  >([]);

  // the observe function will return an unsubscribe callback
  useEffect(
    () =>
      observe((newPos: any) => {
        setKnightPos([...newPos]);
      }),
    knightPos
  );
  return (
    <div>
      <div style={containerStyle}>
        <Board items={knightPos} />
      </div>
    </div>
  );
};

export default ChessboardTutorialApp;
