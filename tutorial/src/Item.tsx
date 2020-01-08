import * as React from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";

const itemStyle: React.CSSProperties = {
  fontSize: 40,
  cursor: "move"
};

export default (): JSX.Element => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ITEM },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        ...itemStyle,
        opacity: isDragging ? 0.5 : 1
      }}
    >
      👕
    </div>
  );
};
