import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import GlobalSytles from "../Sytles/GlobalSytles";
import { ThemeProvider } from "styled-components";
import Theme from "../Sytles/Theme";
import Router from "./Router";
import Client from "../Apollo/Client";

export default () => (
	<ThemeProvider theme={Theme}>
		<ApolloProvider client={Client}>
			<GlobalSytles />
			<Router isLoggedIn={false} />
		</ApolloProvider>
	</ThemeProvider>
);
