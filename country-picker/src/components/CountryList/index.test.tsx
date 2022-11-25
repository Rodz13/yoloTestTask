import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import { GET_COUNTRIES, CountriesList } from './index';

const mocks: readonly MockedResponse<Record<string, any>>[] | undefined = [
	{
		request: {
			query: GET_COUNTRIES,
			variables: {
				code: "FI",
				name: 'Finland'
			}
		},
		result: {
			data: {
			  countries: { code: "FI", name: "Finland" }
			}
		  }
	}
];

describe('<Countries List />', () => {
	test('Search country result', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CountriesList search='FI'/>
			</MockedProvider>
		);
		expect(screen.getByText("Loading...")).toBeInTheDocument();
		expect( await screen.findByText("FI")).toBeInTheDocument();
	});
});
