import React from 'react';
import {
	Card,
	CardBody,
	CardText,
	CardTitle,
	Row,
	Col,
	Spinner
	} from "reactstrap";

import {
	useQuery, gql
} from '@apollo/client';

import './index.css'

const GET_COUNTRIES = gql`
  query countries($countryFilter: CountryFilterInput){
		countries(filter: $countryFilter) {
			code
			name
		}
	}`;

interface CountryListProps {
	search: string;
}

const CountriesList: React.FC<CountryListProps> = ({ search }) => {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	if (loading) return <Spinner className='spinner'>Loading...</Spinner>;
	if (error) return `Error! ${error.message}`;

	if(data.countries && data.countries.length) {
		const searchQuery = data.countries.filter((query:any) =>
			query.code.toLowerCase().includes(search));

	if(searchQuery.length !== 0) {
		return (
			<>
			<Row>
				{searchQuery.map((res:any) => (
				<Col xs='6' sm='4' key={res.id}>
					<Card style={{ margin: '0 0.5rem 20px 0.5rem'}}>
						<CardBody>
							<CardTitle>{res.name}</CardTitle>
							<CardText>{res.code}</CardText>
						</CardBody>
					</Card>
				</Col>
				))}
			</Row>
			</>
		);
		} else {
			return <h1 className='not-found'>Country code not found</h1>
		}
	}

	return <><span>Search a country fo the world</span></>
}

export default CountriesList;
