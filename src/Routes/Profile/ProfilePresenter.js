import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import PostCard from "../../Components/PostCard";

const Wrapper = styled.div`
	min-height: 100vh;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	margin: 0 auto;
	margin-bottom: 40px;
`;

const HeaderColoumn = styled.div``;

const UsernameRow = styled.span`
	display: flex;
`;

const Username = styled.span`
	font-size: 26px;
	display: block;
	margin-right: 10px;
`;

const Counts = styled.ul`
	display: flex;
	margin: 10px 0;
`;

const Count = styled.li`
	font-size: 15px;
	&:not(:last-child) {
		margin-right: 10px;
	}
`;

const Posts = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 250px);
	grid-template-rows: 250px;
	grid-auto-rows: 250px;
	grid-gap: 25px;
`;

export default ({ data, loading }) => {
	if (loading) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	} else {
		const {
			seeUser: {
				id,
				avatar,
				username,
				fullName,
				isFollowing,
				isSelf,
				postsCount,
				followingCount,
				followersCount,
				posts
			}
		} = data;
		return (
			<>
				<Helmet>
					<title>{username} | yoonstagram</title>
				</Helmet>
				<Wrapper>
					<Header>
						<HeaderColoumn>
							<Avatar url={avatar} size="lg" />
						</HeaderColoumn>
						<HeaderColoumn>
							<UsernameRow>
								<Username>{username}</Username>
								{!isSelf && <FollowButton isFollowing={isFollowing} id={id} />}
							</UsernameRow>
							<Counts>
								<Count>
									<FatText text={postsCount.toString()} /> posts
								</Count>
								<Count>
									<FatText text={followersCount.toString()} /> followers
								</Count>
								<Count>
									<FatText text={followingCount.toString()} /> followings
								</Count>
							</Counts>
							<FatText text={fullName} />
						</HeaderColoumn>
					</Header>
					<Posts>
						{posts &&
							posts.map((post) => (
								<PostCard
									key={post.id}
									file={post.files[0].url}
									likeCount={post.likeCount}
									commentCount={post.commentCount}
									length={post.files.length}
								/>
							))}
					</Posts>
				</Wrapper>
			</>
		);
	}
};
