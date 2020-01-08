import * as React from "react";

const trayStyle: React.CSSProperties = {
  border: "1px solid #fefefe",
  borderRadius: "10px"
};

export const ItemTray: React.FC = ({ children }) => {
  return <div style={{ ...trayStyle }}>{children}</div>;
};
