import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull, MoreFiles } from "./Icons";

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	svg {
		fill: white;
	}
	z-index: 3;
	visibility: hidden;
`;

const Card = styled.div`
	background-image: url(${(props) => props.file});
	background-size: cover;
	&:hover {
		${Overlay} {
			opacity: 1;
			visibility: visible;
		}
	}
	cursor: pointer;
	width: 100%;
	height: 100%;
	position: relative;
	align-items: stretch;
	flex: 0 0 auto;
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

const More = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	justify-content: flex-end;
	padding: 7px 7px 0 0;
	pointer-events: none;
	svg {
		fill: white;
		opacity: 0.3;
	}
`;

const PostCard = ({ file, likeCount, commentCount, length = 1 }) => (
	<Card file={file}>
		{length > 1 && (
			<More>
				<MoreFiles size="18" />
			</More>
		)}
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
	files: PropTypes.object.isRequired,
	likeCount: PropTypes.number.isRequired,
	commentCount: PropTypes.number.isRequired,
	lenght: PropTypes.number
};

export default PostCard;
