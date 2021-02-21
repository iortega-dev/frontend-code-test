import { MainStore, undoManager } from '../../stores/MainStore';

describe('MainStore', () => {
	describe('Model', () => {
		test('should create model instance', () => {
			const store = MainStore.create();

			expect(store).toHaveProperty('boxes');
			expect(store.boxes.length).toBe(0);
		});
	});

	describe('Actions', () => {
		let store;
		beforeEach(() => {
			store = MainStore.create();
		});

		test('should add box', () => {
			store.addBox();

			expect(store.boxes.length).toBe(1);
		});

		test('should remove box -1', () => {
			const removedBox = store.removeBox();

			expect(removedBox).toBeUndefined();
		});

		test('should remove box -2', () => {
			store.addBox();
			store.removeBox();

			expect(store.boxes.length).toBe(0);
		});

		describe('UndoManager', () => {
			describe('Instance', () => {
				test('should be defined', () => {
					expect(undoManager).toBeDefined();
				});

				test('should not allow to Undo recently instantiated', () => {
					expect(undoManager.canUndo).toBeFalsy();
				});

				test('should not allow to Redo recently instantiated', () => {
					expect(undoManager.canRedo).toBeFalsy();
				});
			});

			describe('Methods', () => {
				let store;
				beforeEach(() => {
					store = MainStore.create();
				});

				test('should undo action', () => {
          store.addBox()
          undoManager.undo()

          expect(store.boxes.length).toBe(0)
        });

        test('should redo action', () => {
          store.addBox()
          undoManager.undo()
          undoManager.redo()

          expect(store.boxes.length).toBe(1)
        });
			});
		});
	});
});
