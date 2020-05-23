import { gql } from "apollo-boost";

export const TOGGLE_FOLLOW = gql`
	mutation toggleFollow($id: String!) {
		toggleFollow(id: $id)
	}
`;
