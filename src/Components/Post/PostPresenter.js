import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFull, Comment } from "../Icons";

const Post = styled.div`
	${(props) => props.theme.whiteBox}
	width: 100%;
	max-width: 500px;
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

const Files = styled.div``;

const File = styled.img`
	max-width: 100%;
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

export default ({
	caption,
	location,
	user: { username, avatar },
	files,
	likeCount,
	isLiked,
	comments,
	createdAt
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
				files.map((file) => <File key={file.id} id={file.id} src={file.url} />)}
		</Files>
		<Meta>
			<Buttons>
				<Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
				<Button>
					<Comment />
				</Button>
			</Buttons>
			<FatText text={`${likeCount} likes`} />
			<Timestamp>{createdAt}</Timestamp>
		</Meta>
	</Post>
);
