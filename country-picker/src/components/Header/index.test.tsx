import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './index';

describe('<Header />', () => {
	test('Header component', () => {
		render(<Header />);

		expect(screen.getByText(/Countries of the world/i)).toBeVisible();
	});

});
