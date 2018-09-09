// @flow
import * as React from 'react';
import Square from './Square';
import Knight from './Knight';
import { moveKnight } from './Game';

type PropsType = {
  knightPosition: Array<number>,
};

export default class Board extends React.Component<PropsType> {
  handleSquareClick(toX: number, toY: number) {
    moveKnight(toX, toY);
  }

  renderSquare(i: number): React.Node {
    const { knightPosition } = this.props;
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = knightPosition;
    const piece = (x === knightX && y === knightY) ? <Knight /> : null;

    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
        role="presentation"
        onClick={() => this.handleSquareClick(x, y)}
      >
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render(): React.Node {
    const squares = [];
    for (let i = 0; i < 64; i += 1) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    );
  }
}
