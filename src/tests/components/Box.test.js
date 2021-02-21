import { render } from '@testing-library/react';
import React from 'react';

import Box from '../../components/Box';

describe('Box', () => {
  let boxData;

  beforeEach(() => {
    boxData = {
      id: '1',
      color: '#FFFFFF',
      height: 100,
      width: 200,
      left: 0,
      top: 0
    }
  })

	test('should render component', () => {
    const { container } = render(<Box box={boxData} />);
    expect(container.firstChild.classList.contains('box')).toBeTruthy();
    expect(container.firstChild.id).toBe("1");
	});
});
