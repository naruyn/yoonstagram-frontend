import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFull, Comment as CommentIcon } from "../Icons";

const Post = styled.div`
	${(props) => props.theme.whiteBox}
	width: 100%;
	max-width: 500px;
	user-select: none;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	padding: 15px;
`;

const UserColumn = styled.div`
	margin-left: 16px;
`;

const Location = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
`;

const Files = styled.div`
	position: relative;
	padding-bottom: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	flex-shrink: 0;
`;

const File = styled.div`
	max-width: 100%;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	opacity: ${(props) => (props.showing === 1 ? 1 : 0)};
	transition: opacity 0.5s linear;
`;

const Meta = styled.div`
	padding: 15px;
`;

const Button = styled.span``;

const Buttons = styled.div`
	${Button} {
		&:first-child {
			margin-right: 15px;
		}
	}
	margin-bottom: 10px;
`;

const Timestamp = styled.span`
	display: block;
	text-transform: uppercase;
	font-size: 12px;
	opacity: 0.5;
	margin: 10px 0;
	font-weight: 400;
	padding-bottom: 10px;
	border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
	margin-top: 20px;
	border: none;
	width: 100%;
	&:focus {
		outline: none;
	}
	resize: none;
	font-size: 14px;
	font: unset;
`;

const Comments = styled.ul`
	margin-top: 10px;
`;

const Comment = styled.li`
	margin-bottom: 7px;
	span {
		margin-right: 5px;
	}
`;

export default ({
	caption,
	location,
	user: { username, avatar },
	files,
	likeCount,
	isLiked,
	comments,
	createdAt,
	newComment,
	currentItem,
	toggleLike,
	addComment
}) => (
	<Post>
		<Header>
			<Avatar size="sm" url={avatar} />
			<UserColumn>
				<FatText text={username} />
				{location && <Location>{location}</Location>}
			</UserColumn>
		</Header>
		<Files>
			{files &&
				files.map((file, index) => (
					<File
						key={file.id}
						url={file.url}
						showing={index === currentItem ? 1 : 0}
					/>
				))}
		</Files>
		<Meta>
			<Buttons>
				<Button onClick={toggleLike}>
					{isLiked ? <HeartFull /> : <HeartEmpty />}
				</Button>
				<Button>
					<CommentIcon />
				</Button>
			</Buttons>
			<FatText text={likeCount === 1 ? `1 like` : `${likeCount} likes`} />
			<Timestamp>{createdAt}</Timestamp>
			<Comments>
				{comments && (
					<Comments>
						{comments.map((comment) => (
							<Comment key={comment.id}>
								<FatText text={comment.user.username} />
								{comment.text}
							</Comment>
						))}
					</Comments>
				)}
			</Comments>
			<Textarea
				placeholder={"Add a comment..."}
				value={newComment.value}
				onChange={newComment.onChange}
				onKeyDown={addComment}
			/>
		</Meta>
	</Post>
);
