import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import BoxDraggable from '../../components/BoxDraggable';
import { MainStore } from '../../stores/MainStore'

describe('BoxDraggable', () => {

  let fakeStore;

  beforeEach(() => {
    fakeStore = MainStore.create()
    fakeStore.addBox()
  })

	test('should render component', () => {
		const { container } = render(<BoxDraggable box={fakeStore.boxes[0]} />);

    expect(container.firstChild.classList.contains('box')).toBeTruthy();
	});

  test('should toggle selected', () => {
    const { getByTestId } = render(<BoxDraggable box={fakeStore.boxes[0]} />);
    expect(getByTestId(fakeStore.boxes[0].id)).toBeTruthy()

    fireEvent.click(getByTestId(fakeStore.boxes[0].id))
    expect(fakeStore.boxes[0].selected).toBeTruthy()
  })
});
