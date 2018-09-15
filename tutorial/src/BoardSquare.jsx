import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Square from './Square';
import {
  moveKnight,
  canMoveKnight,
  moveQueen,
  canMoveQueen,
} from './Game';
import { ItemTypes } from './Constants';

type PropsType = {
  x: number,
  y: number,
  children?: React.Element<any>,
  connectDropTarget?: (React.Element<any>) => any,
  isOver?: boolean,
  canDrop?: boolean,
};

const squareTarget = {
  drop(props, monitor) {
    const { name } = monitor.getItem();
    if (name === 'knight') {
      moveKnight(props.x, props.y);
    } else if (name === 'queen') {
      moveQueen(props.x, props.y);
    }
  },
  canDrop(props, monitor): boolean {
    const { name } = monitor.getItem();
    if (name === 'knight') {
      return canMoveKnight(props.x, props.y);
    }
    if (name === 'queen') {
      return canMoveQueen(props.x, props.y);
    }
    return true;
  },
};

function collect(connect, monitor): {
  connectDropTarget: (React.Element<any>) => any,
  isOver: boolean,
  canDrop: boolean,
} {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends Component<PropsType> {
  renderOverlay(color): React.Node {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color,
        }}
      />
    );
  }

  render(): React.Node {
    const {
      x,
      y,
      connectDropTarget,
      isOver,
      children,
      canDrop,
    } = this.props;
    const black = (x + y) % 2 === 1;
    return connectDropTarget(
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Square black={black}>
          {children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>,
    );
  }
}
