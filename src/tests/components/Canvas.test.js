import { render } from '@testing-library/react';
import React from 'react';

import Canvas from '../../components/Canvas';
import { MainStore } from '../../stores/MainStore';

describe('Canvas', () => {
	let store;
  beforeEach(() => {
    store = MainStore.create();
    store.addBox();
  });

	test('should render component 1', () => {
    const { container } = render(<Canvas store={store} />);
    expect(container.firstChild.classList.contains('canva')).toBeTruthy();
	});

  test('should render component 2', () => {
    const { queryAllByText } = render(<Canvas store={store} />);
    expect(queryAllByText("Box").length).toBe(1)
	});
});
