import React from "react";
import GlobalSytles from "../Sytles/GlobalSytles";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Sytles/Theme";
import Router from "./Router";
import Footer from "./Footer";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
	{
		isLoggedIn @client
	}
`;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 935px;
	width: 100%;
`;

export default () => {
	const {
		data: { isLoggedIn }
	} = useQuery(QUERY);

	return (
		<ThemeProvider theme={Theme}>
			<Wrapper>
				<GlobalSytles />
				<Router isLoggedIn={isLoggedIn} />
				<Footer />
			</Wrapper>
		</ThemeProvider>
	);
};
