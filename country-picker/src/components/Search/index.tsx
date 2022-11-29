import React, { useState } from 'react';
import { Input, Space } from 'antd';

import { CountriesList } from '../CountryList';
import { addToQueryParams } from 'components/utils/addToQuery';

import './index.css';

const Search: React.FC= () => {
	const [query, updatedQuery] = useState('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as HTMLTextAreaElement;

		updatedQuery(target.value.toLocaleLowerCase());

		const queryParams = addToQueryParams('s', target.value);
		window.history.pushState(null, '', `${window.location.pathname}${queryParams ? `?${queryParams}` : ''}`);
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

export { Search };
