# Test requirements

- ✔ Add and remove boxes.

Method addBox() of MainStore generates a new Box model instance with a random id & color, and push it to the MainStore boxes array.

Method removeBox() of MainStore removes the last box from the MainStore boxes array. 

- ✔ Select a box, which should visually indicate that is selected

When you make a click in a Box element it calls the toggleSelected() method of it's instance, toggling the selected property.

It also shows a inner dashed border to identify box selection.

- ✔ Drag the boxes around using interact.js and using React refs.
  - Keep in mind you should be able to drag a box even if it's not selected when the dragging starts.

Making use of Interacjs API, at the render of the component, adds draggable capability to the div element, allowing to move it inside the canvas.

- ✔ Changing a box's color.

When a box selected property is true, you're able to modify it's color by using the ColorPicker at the top Toolbar, the value of this picker is reflected at the Box's background color.

# Extra credit

- ✔ Display a counter indicating how many boxes are selected.

At the top Toolbar, it displays how many Boxes from the MainStore have its selected property at true.

- ✔ Support selection, dragging and color changing for multiple boxes.

You're able to have more than one box instance from the Boxes array to have selected property marked as true.

When a box is being dragged, it also moves the position of each selected boxes at the MainStore boxes array. 

- ✘ Save the state of the app locally and restore it when it loads.

I tried to make it work this functionality by using the snapshots restore capability from the LocalStorage, but didn't worked.

I could have tried to use the mst-persist library, but it wouldn't have been the proper thing to do.

- ✔ Undo / Redo capabilities
  - **hint**: mobx-state-tree provides a middleware for this.

By using UndoManager (https://github.com/mobxjs/mobx-state-tree/tree/master/packages/mst-middlewares#undomanager) middleware provided by MST, I've applied this middleware to the MainStore, and also added the Undo/Redo buttons to the Toolbar.

I've disabled the registry of ChangeColor or Move boxes action due to the fact that it will register every pixel or every value that has been changed, that's too many registers.

I tried to group all this actions by using startGroup feature, but it didn't work.

# Contact

If you have any questions about the project, my email is iortegamancera@gmail.com
