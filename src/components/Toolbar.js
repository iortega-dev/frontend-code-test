import { observer } from 'mobx-react';
import React from 'react';

import { undoManager } from '../stores/MainStore'

function Toolbar(props) {
	const changeSelectedBoxesColor = (color) => {
		props.store.selectedBoxes.forEach((box) => box.changeColor(color));
	};

	const undo = () => undoManager.canUndo && undoManager.undo()
	const redo = () => undoManager.canRedo && undoManager.redo()

	return (
		<>
			<div className="toolbar">
				<button onClick={() => props.store.addBox()}>Add Box</button>
				<button onClick={() => props.store.removeBox()}>Remove Box</button>
				<input
					data-testid="colorpicker"
					type="color"
					disabled={!props.store.selectedBoxes.length > 0}
					value={
						props.store.selectedBoxes.length > 0
							? props.store.selectedBoxes[props.store.selectedBoxes.length - 1]
									.color
							: '#000000'
					}
					onChange={(event) => changeSelectedBoxesColor(event.target.value)}
				/>
				<span>
					{props.store.selectedBoxes.length > 0
						? `Selected ${props.store.selectedBoxes?.length} boxes`
						: 'No boxes selected'}
				</span>
			</div>
			<div className="toolbar-history">
				<button disabled={!undoManager.canUndo}  onClick={() => undo()}>Undo</button>
				<button disabled={!undoManager.canRedo} onClick={() => redo()}>Redo</button>
			</div>
		</>
	);
}

export default observer(Toolbar);
