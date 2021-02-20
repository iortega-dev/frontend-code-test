import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import { UndoManager } from "mst-middlewares"

import BoxModel from './models/Box';

import getRandomColor from '../utils/getRandomColor';

const MainStore = types
	.model('MainStore', {
		boxes: types.array(BoxModel),
	})
	.actions((self) => {
		setUndoManager(self)
		return {
			addBox() {
				self.boxes.push({
					id: uuid(),
					color: getRandomColor(),
					left: 0,
					top: 0,
				});
			},
      removeBox() {
        self.boxes.pop();
      },
		};
	})
	.views((self) => ({
		get selectedBoxes() {
			return self.boxes.filter(b => b.selected)
		}
	}));

export let undoManager = {}
export const setUndoManager = (targetStore) => {
	undoManager = UndoManager.create({}, { targetStore })
}
const store = MainStore.create();

store.addBox()

export default store;
