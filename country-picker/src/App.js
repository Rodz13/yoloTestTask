import React from 'react';
import { ApolloProvider } from '@apollo/client';

import config from './lib/apollo';

import Header from './components/Header';
import Search from './components/Search';

const App = () => {
	return (
		<ApolloProvider client={config}>
			<Header />
			<Search />
		</ApolloProvider>
	);
}

export default App;
