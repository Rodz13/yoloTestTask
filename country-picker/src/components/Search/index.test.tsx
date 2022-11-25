import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import userEvent from '@testing-library/user-event';

import { Search } from './index';

describe('<Search />', () => {
	test('Search component roles', () => {
		render(
			<MockedProvider>
				<Search />
			</MockedProvider>
		);

		expect(screen.getByRole('textbox', { name: ''})).toBeInTheDocument();
	});

	test('Search user input with close search roles', () => {
		render(
			<MockedProvider>
				<Search />
			</MockedProvider>
		);

		expect(screen.getByRole('textbox', { name: ''})).toBeInTheDocument();
		userEvent.type(screen.getByPlaceholderText(/search country code/i), "BR");
		expect(screen.getByRole('button', { name: 'close-circle'})).toBeInTheDocument();
		expect(screen.getByRole('img', { name: 'close-circle'})).toBeInTheDocument();

	});
});
