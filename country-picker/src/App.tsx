import React from 'react';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/reset.css';


import config from './lib/apollo';

import { Header } from './components/Header';
import Search from './components/Search';

const App:React.FC = () => {
	return (
		<ApolloProvider client={config}>
			<Header />
			<Search />
		</ApolloProvider>
	);
}

export default App;
