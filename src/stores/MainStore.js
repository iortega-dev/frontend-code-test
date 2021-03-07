import { onSnapshot, types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import { UndoManager } from "mst-middlewares"

import BoxModel from './models/Box';

import getRandomColor from '../utils/getRandomColor';

export const MainStore = types
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

let store = MainStore.create();

const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (MainStore.is(json)) {
    store = MainStore.create(json);
  }
}

onSnapshot(store, snapshot => {
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

export default store;
