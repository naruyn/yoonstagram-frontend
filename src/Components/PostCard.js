import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "./FatText";

const Card = styled.div``;

const PostCard = ({ files, likeCount, commentCount }) => (
	<Card files={files} likeCount={likeCount} commentCount={commentCount}>
		<FatText text={likeCount.toString()} />
		<FatText text={commentCount.toString()} />
	</Card>
);

PostCard.propTypes = {
	files: PropTypes.array.isRequired,
	likeCount: PropTypes.number.isRequired,
	commentCount: PropTypes.number.isRequired
};

export default PostCard;
