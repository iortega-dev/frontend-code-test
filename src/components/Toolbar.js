import { observer } from 'mobx-react';
import React from 'react';

function Toolbar(props) {

	const changeSelectedBoxesColor = (color) => {
		props.store.selectedBoxes.forEach((box) => box.changeColor(color))
	}

	return (
		<div className="toolbar">
			<button onClick={() => props.store.addBox()}>Add Box</button>
			<button onClick={() => props.store.removeBox()}>Remove Box</button>
			<input
				type="color"
				disabled={!props.store.selectedBoxes.length > 0}
				value={
					props.store.selectedBoxes.length > 0 ? props.store.selectedBoxes[props.store.selectedBoxes.length - 1].color : '#000000'
				}
				onChange={(event) => changeSelectedBoxesColor(event.target.value)}
			/>
			<span>{props.store.selectedBoxes.length > 0 ? `Selected ${props.store.selectedBoxes?.length} boxes` : 'No boxes selected'}</span>
		</div>
	);
}

export default observer(Toolbar);
