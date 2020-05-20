import React from "react";
import GlobalSytles from "../Styles/GlobalSytles";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

const QUERY = gql`
	{
		isLoggedIn @client
	}
`;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.maxWidth};
	width: 100%;
`;

export default () => {
	const {
		data: { isLoggedIn }
	} = useQuery(QUERY);

	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalSytles />
				<Router>
					{isLoggedIn && <Header />}
					<Wrapper>
						<Routes isLoggedIn={isLoggedIn} />
						<Footer />
					</Wrapper>
				</Router>
				<ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
			</>
		</ThemeProvider>
	);
};
