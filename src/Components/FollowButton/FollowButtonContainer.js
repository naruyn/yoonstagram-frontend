import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_FOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = ({ isFollowing, id }) => {
	const [isFollowingState, setIsFollowing] = useState(isFollowing);
	const [toggleFollowMutation] = useMutation(TOGGLE_FOLLOW, {
		variables: { id }
	});

	const onClick = () => {
		toggleFollowMutation();
		setIsFollowing(!isFollowingState);
	};
	return (
		<FollowButtonPresenter isFollowing={isFollowingState} onClick={onClick} />
	);
};

FollowButtonContainer.propTypes = {
	isFollowing: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};

export default FollowButtonContainer;
