import React, { useState } from 'react';
import { Col, Input, Row } from 'reactstrap';

import CountriesList from '../CountryList';

import './index.css';

const Search: React.FC= () => {
	const [query, updatedQuery] = useState('');

	// const handleSearch = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	const target = e.target as HTMLTextAreaElement;
	// 	updatedQuery(target.value.toLocaleLowerCase());
	// }

	const handleSearch = (e: { target: { value: string; } }) => {
		// e.target.preventDefault();
		// const target = e.target as HTMLTextAreaElement;
		updatedQuery(e.target.value.toLocaleLowerCase());
	}

	return (
		<div className='container'>
			<Row>
				<Col>
					<div className='search'>
						<Input
						onChange={handleSearch}
						value={query}
						placeholder='Search here'
						/>
						</div>
				</Col>
			</Row>
			<CountriesList search={query} />
		</div>
	)
}

export default Search;
