import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import interact from 'interactjs';
import { useCallback } from 'react';

const BoxDraggable = (props) => {
	const ref = useRef();

	// Drag element listener
	const dragMoveListener = useCallback(
		(event) => {
			// Move Selected Boxes
			const selectedBoxes = props.selectedBoxes;
			selectedBoxes.forEach((box) => {
				var x = (parseFloat(box.left) || 0) + event.dx;
				var y = (parseFloat(box.top) || 0) + event.dy;
				// update the position attributes
				box.move(x, y)
			});
		},
		[props.selectedBoxes]
	);

	// Drag element ends listener
	const dragMoveEnd = useCallback(() => {
  	props.box.toggleSelected()
	}, [props.box])

	// Add interact capability to element
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
				end: dragMoveEnd
			},
		});
	}, [dragMoveEnd, dragMoveListener, ref]);

	// translate the element if Box position properties change
	useEffect(() => {
		ref.current.style.webkitTransform = ref.current.style.transform =
			'translate(' + props.box.left + 'px, ' + props.box.y + 'px)';
	}, [props.box.left, props.box.y]);

	return (
		<div
			ref={ref}
			id={props.box.id}
			data-testid={props.box.id}
			className={`box pointer ${props.box.selected ? 'selected' : ''}`}
			onClick={props.box.toggleSelected}
			style={{
				backgroundColor: props.box.color,
				width: props.box.width,
				height: props.box.height,
				transform: `translate(${props.box.left}px, ${props.box.top}px)`,
			}}
		>
			{props.children}
		</div>
	);
};

export default observer(BoxDraggable);
