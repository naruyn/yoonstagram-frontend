import React from "react";
import styled from "styled-components";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
	height: 50vh;
`;

const Section = styled.div`
	margin-bottom: 50px;
	align-items: center;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, 160px);
	grid-template-rows: 160px;
	grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
	grid-template-columns: repeat(4, 200px);
	grid-template-rows: 200px;
	grid-auto-rows: 200px;
`;

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
										id={searchUser.id}
										username={searchUser.username}
										avatar={searchUser.avatar}
										isFollowing={searchUser.isFollowing}
										isSelf={searchUser.isSelf}
									/>
								))
							)}
						</Section>
						<PostSection>
							{data.searchPost.length === 0 ? (
								<FatText text="No post found" />
							) : (
								data.searchPost.map((searchPost) => (
									<PostCard
										key={searchPost.id}
										file={searchPost.files[0].url}
										likeCount={searchPost.likeCount}
										commentCount={searchPost.commentCount}
									/>
								))
							)}
						</PostSection>
					</Wrapper>
				);
			}
		}
	}
};

export default SearchPresenter;
