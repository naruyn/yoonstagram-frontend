import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";

const PostContainer = ({
	id,
	caption,
	location,
	user,
	files,
	likeCount,
	isLiked,
	comments,
	commentCount,
	createdAt
}) => {
	const [likeCountState, setLikeCount] = useState(likeCount);
	const [isLikedState, setIsLiked] = useState(isLiked);
	const [commentsState, setComments] = useState(comments);
	const [currentItem, setCurrentItem] = useState(0);
	const comment = useInput("");

	const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
		variables: { postId: id }
	});
	const [addCommentMutation] = useMutation(ADD_COMMENT, {
		variables: { text: comment.value, postId: id }
	});
	const slide = () => {
		const totalFiles = files.length;
		if (currentItem === totalFiles - 1) {
			setTimeout(() => setCurrentItem(0), 3000);
		} else {
			setTimeout(() => setCurrentItem(currentItem + 1), 3000);
		}
	};
	// useEffect(slide, [currentItem]);

	const toggleLike = () => {
		if (isLikedState === true) {
			setLikeCount(likeCountState - 1);
		} else {
			setLikeCount(likeCountState + 1);
		}
		setIsLiked(!isLikedState);

		toggleLikeMutation();
	};

	const makeDateYYYYMMDD = (currentDate) => {
		const date = new Date(currentDate);
		return `${date.getFullYear()}/${
			date.getMonth() + 1 < 10
				? "0" + (date.getMonth() + 1)
				: date.getMonth() + 1
		}/${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
	};

	createdAt = makeDateYYYYMMDD(createdAt);

	const addComment = async (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			try {
				const {
					data: { addComment }
				} = await addCommentMutation();
				setComments([...commentsState, addComment]);
				comment.setValue("");
			} catch {
				throw Error("Can't add comment");
			}
		}
	};
	return (
		<PostPresenter
			caption={caption}
			location={location}
			user={user}
			files={files}
			likeCount={likeCountState}
			isLiked={isLikedState}
			comments={commentsState}
			createdAt={createdAt}
			newComment={comment}
			setLikeCount={setLikeCount}
			setIsLiked={setIsLiked}
			currentItem={currentItem}
			toggleLike={toggleLike}
			addComment={addComment}
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
