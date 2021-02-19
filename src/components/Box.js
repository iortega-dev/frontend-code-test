import React from "react";
import { observer } from "mobx-react";
import BoxDraggable from "./BoxDraggable";

function Box(props) {
  const ref = React.createRef();
  return (
    <BoxDraggable ref={ref} {...props}>
      <div>Box</div>
    </BoxDraggable>
  );
}

export default observer(Box);
