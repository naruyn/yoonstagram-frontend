import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import useInput from "../Hooks/useInput";
import Input from "./Input";
import { MainLogo, Compass, HeartEmpty, User } from "./Icons";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const Header = styled.header`
	width: 100%;
	border: 0;
	border-bottom: ${(props) => props.theme.boxBorder};
	border-radius: 0px;
	margin-bottom: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px 0;
	background-color: white;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	max-width: ${(props) => props.theme.maxWidth};
	display: flex;
	justify-content: center;
`;

const HeaderColoumn = styled.div`
	width: 33%;
	text-align: center;
	&:first-child {
		margin-right: auto;
		text-align: left;
	}
	&:last-child {
		margin-left: auto;
		text-align: right;
	}
`;

const SearchInput = styled(Input)`
	background-color: ${(props) => props.theme.bgColor};
	padding: 5px;
	font-size: 14px;
	height: auto;
	text-align: center;
	width: 80%;
	&::placeholder {
		opacity: 0.8;
		font-weight: 200;
	}
`;

const HeaderLink = styled(Link)`
	&:not(:last-child) {
		margin-right: 30px;
	}
`;

const ME = gql`
	{
		me {
			username
		}
	}
`;

export default withRouter(({ history }) => {
	const search = useInput("");
	const onSearchSubmit = (e) => {
		e.preventDefault();
		history.push(`/search?term=${search.value}`);
		search.setValue("");
	};
	const { data } = useQuery(ME);
	return (
		<Header>
			<HeaderWrapper>
				<HeaderColoumn>
					<Link to="/">
						<MainLogo />
					</Link>
				</HeaderColoumn>
				<HeaderColoumn>
					<form onSubmit={onSearchSubmit}>
						<SearchInput
							value={search.value}
							onChange={search.onChange}
							placeholder="Search"
						/>
					</form>
				</HeaderColoumn>
				<HeaderColoumn>
					<HeaderLink to="/explore">
						<Compass />
					</HeaderLink>
					<HeaderLink to="/notifications">
						<HeartEmpty />
					</HeaderLink>
					{data && data.me ? (
						<HeaderLink to={data.me.username}>
							<User />
						</HeaderLink>
					) : (
						<HeaderLink to="/#">
							<User />
						</HeaderLink>
					)}
				</HeaderColoumn>
			</HeaderWrapper>
		</Header>
	);
});
