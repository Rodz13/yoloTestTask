import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import { GET_COUNTRIES, CountriesList } from './index';
import '../../tests/mocks/mocks';

const mocks: readonly MockedResponse<Record<string, any>>[] | undefined = [
	{
		request: {
			query: GET_COUNTRIES,
		},
		result: {
			data: {
			  countries: [{ code: 'FI', name: 'Finland' }]
			}
		}
	}
];

describe('<Countries List />', () => {
	test('Search country result', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CountriesList search='fi'/>
			</MockedProvider>
		);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
		expect( await screen.findByText('FI')).toBeInTheDocument();
	});
});
