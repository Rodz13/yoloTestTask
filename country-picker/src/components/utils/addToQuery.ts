const addToQueryParams = (key:string, value:string) => {
	const queryParams = new URLSearchParams(window.location.search);

	queryParams.set(key, value);

	if (value === '') {
		queryParams.delete(key);
	}

	return queryParams.toString();
};

export { addToQueryParams };
