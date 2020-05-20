import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
	id,
	caption,
	location,
	user,
	files,
	likeCount,
	isLiked,
	comments,
	createdAt
}) => {
	const [likeCountState, setLikeCount] = useState(likeCount);
	const [isLikedState, setIsLiked] = useState(isLiked);
	const comment = useInput("");
	return (
		<PostPresenter
			caption={caption}
			location={location}
			user={user}
			files={files}
			likeCount={likeCountState}
			isLiked={isLikedState}
			comments={comments}
			createAt={createdAt}
			comment={comment}
			setLikeCount={setLikeCount}
			setIsLiked={setIsLiked}
		/>
	);
};

PostContainer.propTypes = {
	id: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	location: PropTypes.string,
	user: PropTypes.shape({
		id: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		username: PropTypes.string.isRequired
	}).isRequired,
	files: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	).isRequired,
	likeCount: PropTypes.number.isRequired,
	isLiked: PropTypes.bool.isRequired,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			user: PropTypes.shape({
				id: PropTypes.string.isRequired,
				username: PropTypes.string.isRequired
			}).isRequired
		})
	).isRequired,
	createdAt: PropTypes.string.isRequired
};

export default PostContainer;
