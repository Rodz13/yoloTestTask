import { render, screen } from '@testing-library/react';

import { NotFound } from './index';

describe('<NotFound />', () => {
	test('Country Not Found component', () => {
		render(<NotFound />);

		expect(screen.getByText(/Country Code Not Found/i)).toBeVisible();
		expect(screen.getByText(/Country code has 2 characters - for example: EE for Estonia/i)).toBeVisible();
		expect(screen.getByRole('alert', { name: ''})).toBeInTheDocument();
		expect(screen.getByRole('img', { name: 'close-circle'})).toBeInTheDocument();
		
	});

});
