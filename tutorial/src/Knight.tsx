import * as React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import knightImage from "./knightimage";

export interface ItemProps {
  type: string;
  id: string;
  fromPosition: number[];
}

const knightStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};

export const Knight: React.FC<{ name: string; position: number[] }> = ({
  name,
  position
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT, id: name, fromPosition: position },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1
        }}
      >
        {name}
      </div>
    </>
  );
};
