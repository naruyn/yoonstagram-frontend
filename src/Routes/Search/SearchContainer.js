import React from "react";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location: { search } }) => {
	const term = search.split("=")[1];

	const { data, loading } = useQuery(SEARCH, { variables: { term } });

	console.log(data, loading);
	return (
		<>
			<Helmet>
				<title>Search | yoonstagram</title>
			</Helmet>
			<SearchPresenter data={data} loading={loading} />
		</>
	);
});
