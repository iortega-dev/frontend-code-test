import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Toolbar from '../../components/Toolbar';
import { MainStore } from '../../stores/MainStore'

describe('Toolbar', () => {

  let fakeStore;

  beforeEach(() => {
    fakeStore = MainStore.create()
  })

	test('should render component', () => {
		const { container } = render(<Toolbar store={fakeStore} />);

    expect(container.firstChild.classList.contains('toolbar')).toBeTruthy();
	});

  test('should add box', () => {
    const { getByText } = render(<Toolbar store={fakeStore} />);
    expect(getByText('Add Box')).toBeTruthy()

    fireEvent.click(getByText('Add Box'))
    expect(fakeStore.boxes[0]).toBeTruthy()
  })

  test('should remove box', () => {
    const { getByText } = render(<Toolbar store={fakeStore} />);
    expect(getByText('Remove Box')).toBeTruthy()

    fakeStore.addBox()

    fireEvent.click(getByText('Remove Box'))
    expect(fakeStore.boxes.length).toBeFalsy()
  })
  
  test('should change color of selected boxes', () => {
    const { getByTestId } = render(<Toolbar store={fakeStore} />);
    expect(getByTestId("colorpicker")).toBeTruthy()

    fakeStore.addBox()
    fakeStore.boxes[0].toggleSelected()

    fireEvent.change(getByTestId("colorpicker"), { target: { value: '#ffffff' } })
    expect(fakeStore.selectedBoxes[0].color).toBe('#ffffff')
  })

  test('should undo action', () => {
    const { getByText } = render(<Toolbar store={fakeStore} />);
    expect(getByText('Undo')).toBeTruthy()

    fakeStore.addBox()

    fireEvent.click(getByText('Undo'))
    expect(fakeStore.boxes.length).toBeFalsy()
  })

  test('should redo action', () => {
    const { getByText } = render(<Toolbar store={fakeStore} />);
    expect(getByText('Undo')).toBeTruthy()

    fakeStore.addBox()
    
    fireEvent.click(getByText('Undo'))
    fireEvent.click(getByText('Redo'))

    expect(fakeStore.boxes[0]).toBeTruthy()
  })

});
