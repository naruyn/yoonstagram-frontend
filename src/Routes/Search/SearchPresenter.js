import React from "react";
import styled from "styled-components";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
	text-align: center;
`;

const Section = styled.div``;

const SearchPresenter = ({ data, loading }) => {
	if (loading) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	} else {
		//
		if (data) {
			if (data.searchUser && data.searchPost) {
				return (
					<Wrapper>
						<Section>
							{data.searchUser.length === 0 ? (
								<FatText text="No user found" />
							) : (
								data.searchUser.map((searchUser) => (
									<UserCard
										key={searchUser.id}
										username={searchUser.username}
										avatar={searchUser.avatar}
										isFollowing={searchUser.isFollowing}
										isSelf={searchUser.isSelf}
									/>
								))
							)}
						</Section>
						<Section>
							{data.searchPost.length === 0 ? (
								<FatText text="No post found" />
							) : (
								data.searchPost.map((searchPost) => (
									<PostCard
										key={searchPost.id}
										files={searchPost.files}
										likeCount={searchPost.likeCount}
										commentCount={searchPost.commentCount}
									/>
								))
							)}
						</Section>
					</Wrapper>
				);
			}
		}
	}
};

export default SearchPresenter;
