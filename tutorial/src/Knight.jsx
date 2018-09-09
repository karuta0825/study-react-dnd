// @flow
import * as React from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

type PropsType = {
  connectDragSource?: (React.Element<any>) => any,
  isDragging?: boolean,
};

const knightSource = {
  beginDrag(props) {
    return {};
  },
};

function collect(connect, monitor): {
  connectDragSource: (React.Element<any>) => any,
  isDragging: boolean,
} {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export default class Knight extends React.Component<PropsType> {
  render(): React.Node {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>,
    );
  }
}
