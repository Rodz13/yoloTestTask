import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query countries($countryFilter: CountryFilterInput){
		countries(filter: $countryFilter) {
			code
			name
		}
	}`;

export { GET_COUNTRIES };
