import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Dot = styled.span`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active ? props.theme.blueColor : props.theme.darkGreyColor};
	&:not(:last-child) {
		margin-right: 5px;
	}
`;

const DotCarousel = ({ files, size = 5, active }) => (
	<Container files={(files, size, active)}>
		{files.map((file, index) => (
			<Dot key={file.id} active={index === active} size={size} />
		))}
	</Container>
);

DotCarousel.propTypes = {
	files: PropTypes.array.isRequired,
	active: PropTypes.number.isRequired
};

export default DotCarousel;
