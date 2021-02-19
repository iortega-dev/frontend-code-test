import { observer } from 'mobx-react';
import React from 'react';

function Toolbar(props) {
	return (
		<div className="toolbar">
			<button onClick={() => props.store.addBox()}>Add Box</button>
			<button onClick={() => props.store.removeBox()}>Remove Box</button>
			<input
				type="color"
				disabled={!props.store.selectedBox}
				value={
					props.store.selectedBox ? props.store.selectedBox.color : '#000000'
				}
				onChange={(event) => props.store.selectedBox.changeColor(event.target.value)}
			/>
			<span>{props.store.selectedBox ? `Selected Box with color ${props.store.selectedBox?.color}` : 'No box selected'}</span>
		</div>
	);
}

export default observer(Toolbar);
