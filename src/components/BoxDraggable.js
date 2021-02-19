import React, { useEffect } from "react";
import { observer } from "mobx-react";
import interact from 'interactjs'

import { dragMoveListener } from "../utils/dragMoveListener";

const BoxDraggable = React.forwardRef((props, ref) => {

  useEffect(() => {
		interact(ref.current).draggable({
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true,
				}),
			],
			listeners: {
				move: dragMoveListener,
			},
		});
	}, [ref]);

  return (
    <div
      ref={ref}
      id={props.id}
      className={`box pointer ${props.box.selected ? 'selected' : ''}`}
      onClick={props.box.toggleSelected}
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`
      }}
    >
      {props.children}
    </div>
  );
});

export default observer(BoxDraggable);
