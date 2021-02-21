import { render } from '@testing-library/react';
import React from 'react';

import App from '../../components/App';

describe('App', () => {
	test('should render component', () => {
		const { container } = render(<App />);
    
    expect(container.firstChild.classList.contains('app')).toBeTruthy();
	});
});
