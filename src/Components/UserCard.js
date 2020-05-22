import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div`
	display: flex;
	flex-direction: row;
`;

const UserCard = ({ username, avatar, isFollowing, isSelf }) => (
	<Card>
		<Avatar url={avatar} />
		<FatText text={username} />
		{!isSelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
	</Card>
);

UserCard.propTypes = {
	username: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	isFollowing: PropTypes.bool.isRequired,
	isSelf: PropTypes.bool.isRequired
};

export default UserCard;
