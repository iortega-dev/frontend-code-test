import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';

const MainStore = types
	.model('MainStore', {
		boxes: types.array(BoxModel),
	})
	.actions((self) => {
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

const store = MainStore.create();

store.addBox()

export default store;
