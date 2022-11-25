import React, { useState } from 'react';
// import { Col, Input, Row } from 'reactstrap';
import { Input, Space } from 'antd';

import CountriesList from '../CountryList';

import './index.css';

const Search: React.FC= () => {
	const [query, updatedQuery] = useState('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as HTMLTextAreaElement;
		updatedQuery(target.value.toLocaleLowerCase());
	}

	return (
		<div className='container'>
			<Space direction="vertical" className='search'>
				<Input
					placeholder="search country code"
					onChange={handleSearch}
					value={query}
					allowClear
				/>
			</Space>
			<CountriesList search={query} />
		</div>
	)
}

export default Search;
