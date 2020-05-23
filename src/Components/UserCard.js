import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";

const Card = styled.div`
	${(props) => props.theme.whiteBox}
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: 100%;
`;

const ExtendedAvatar = styled(Avatar)`
	margin-bottom: 15px;
`;

const ExtendedLink = styled(Link)`
	color: inherit;
	margin-bottom: 10px;
`;

const UserCard = ({ id, username, avatar, isFollowing, isSelf }) => (
	<Card>
		<ExtendedAvatar url={avatar} size={"md"} />
		<ExtendedLink to={`/${username}`}>
			<FatText text={username} />
		</ExtendedLink>
		{!isSelf && <FollowButton isFollowing={isFollowing} id={id} />}
	</Card>
);

UserCard.propTypes = {
	id: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	isFollowing: PropTypes.bool.isRequired,
	isSelf: PropTypes.bool.isRequired
};

export default UserCard;
