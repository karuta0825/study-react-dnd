// @flow
import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import Queen from './Queen';
import { hot } from 'react-hot-loader';

type PropsType = {
  knightPosition: Array<number>,
  queenPosition: Array<number>,
};

@DragDropContext(HTML5Backend)
class Board extends React.Component<PropsType> {
  renderSquare(i: number): React.Node {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
      >
        <BoardSquare
          x={x}
          y={y}
        >
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x: number, y: number): ?React.Node {
    const { knightPosition, queenPosition } = this.props;
    const [knightX, knightY] = knightPosition;
    const [queenX, queenY] = queenPosition;

    if (x === knightX && y === knightY) {
      return <Knight />;
    }

    if (x === queenX && y === queenY) {
      return <Queen />;
    }

    return null;
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

export default hot(module)(Board);
