import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import interact from 'interactjs';
import { useCallback } from 'react';

const BoxDraggable = (props) => {
	const ref = useRef();

	const dragMoveListener = useCallback((event) => {
		var target = event.target;
		// keep the dragged position in the data-x/data-y attributes
		var x = (parseFloat(props.box.left) || 0) + event.dx;
		var y = (parseFloat(props.box.top) || 0) + event.dy;

		// translate the element
		target.style.webkitTransform = target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';

		// update the posiion attributes
		props.box.setLeft(x);
		props.box.setTop(y);
	}, [props.box]);

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
	}, [dragMoveListener, ref]);

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
				transform: `translate(${props.left}px, ${props.top}px)`,
			}}
		>
			{props.children}
		</div>
	);
};

export default observer(BoxDraggable);
