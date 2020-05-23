import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull } from "./Icons";

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: opacity 0.3s linear;
	svg {
		fill: white;
	}
`;

const Card = styled.div`
	background-image: url(${(props) => props.file});
	background-size: cover;
	&:hover {
		${Overlay} {
			opacity: 1;
		}
	}
	cursor: pointer;
	width: 100%;
	height: 100%;
`;

const Number = styled.div`
	display: flex;
	align-items: center;
	color: white;
	&:first-child {
		margin-right: 30px;
	}
`;

const NumberText = styled.span`
	margin-left: 10px;
`;

const PostCard = ({ file, likeCount, commentCount }) => (
	<Card file={file}>
		<Overlay>
			<Number>
				<HeartFull />
				<NumberText>{likeCount}</NumberText>
			</Number>
			<Number>
				<CommentFull />
				<NumberText>{commentCount}</NumberText>
			</Number>
		</Overlay>
	</Card>
);

PostCard.propTypes = {
	file: PropTypes.string.isRequired,
	likeCount: PropTypes.number.isRequired,
	commentCount: PropTypes.number.isRequired
};

export default PostCard;
