import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
	query seeUser($username: String!) {
		seeUser(username: $username) {
			id
			avatar
			username
			fullName
			isFollowing
			isSelf
			postsCount
			followingCount
			followersCount
			posts {
				id
				files {
					url
				}
				likeCount
				commentCount
			}
		}
	}
`;

export default withRouter(
	({
		match: {
			params: { username }
		}
	}) => {
		const { data, loading } = useQuery(GET_USER, {
			variables: { username }
		});
		return <ProfilePresenter data={data} loading={loading} />;
	}
);
