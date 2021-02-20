import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: types.string,
    left: types.number,
    top: types.number,
    selected: types.optional(types.boolean, false)
  })
  .views(self => ({}))
  .actions(self => ({
    toggleSelected() {
      self.selected = !self.selected
    },
    changeColor(value) {
      self.color = value
    },
    setLeft (value) {
      self.left = value
    },
    setTop (value) {
      self.top = value
    }
  }));

export default BoxModel;
