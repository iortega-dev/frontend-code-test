import { observer } from 'mobx-react';
import React from 'react';

function Toolbar(props) {
	return (
		<div className="toolbar">
			<button onClick={() => props.store.addBox()}>Add Box</button>
			<button onClick={() => props.store.removeBox()}>Remove Box</button>
			<input type="color" />
			<span>No boxes selected</span>
		</div>
	);
}

export default observer(Toolbar);
