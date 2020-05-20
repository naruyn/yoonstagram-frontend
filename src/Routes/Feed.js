import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const FEED_QEURY = gql`
	{
		seeFeed {
			id
			location
			caption
			user {
				id
				avartar
				username
			}
			files {
				id
				url
			}
			likeCount
			isLiked
			comments {
				id
				text
				user {
					id
					username
				}
			}
			createdAt
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default () => {
	const { data, loading } = useQuery(FEED_QEURY);
	console.log(data, loading);

	return (
		<Wrapper>
			{loading && <Loader />}
			{!loading &&
				data &&
				data.seeFeed &&
				data.seeFeed.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						user={post.user}
						files={post.files}
						likeCount={post.likeCount}
						isLiked={post.isLiked}
						comments={post.comments}
						createAt={post.createAt}
					/>
				))}
		</Wrapper>
	);
};
