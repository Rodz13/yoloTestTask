import React from 'react';
import { Spin, Table } from 'antd';
import { useQuery, gql } from '@apollo/client';

import { NotFound } from '../CountryNotFound';


import './index.css'

const GET_COUNTRIES = gql`
  query countries($countryFilter: CountryFilterInput){
		countries(filter: $countryFilter) {
			code
			name
		}
	}`;

type CountryListProps = {
	search: string;
}

const columns =[
	{
		title:'Code',
		dataIndex:'code',
		key:'code'

	} ,
	{
		title:'Country',
		dataIndex:'country',
		key:'country'

	},
]


const CountriesList = ({ search }: CountryListProps )  => {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	if (loading) return <Spin className='spinner' tip='Loading...' />
	if (error) return <span>`Error! ${error.message}`</span>;

	if(data?.countries.length) {
		const searchQuery = data.countries.filter((query:any) =>
			query.code.toLowerCase().includes(search));

		if(searchQuery.length === 0) {
			return <NotFound />
		}

		const dataSource = searchQuery.map((res:any)  => ({
			key:res.code, code:res.code, country: res.name
		}));

		return (
			<Table dataSource={dataSource} columns={columns} />
		);
}

	return <><span>Search a country fo the world</span></>
}

export { GET_COUNTRIES, CountriesList };
