import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getSize = (size) => {
	let number;
	if (size === "sm") {
		number = 30;
	} else if (size === "md") {
		number = 50;
	} else if (size === "lg") {
		number = 150;
	}

	return `width:${number}px; height:${number}px;`;
};

const Container = styled.div`
	${(props) => getSize(props.size)}
	background-image: url(${(props) => props.url});
	background-size: cover;
	border-radius: 50%;
`;

const Avatar = ({ size = "sm", url }) => {
	if (!url)
		url =
			"https://scontent-itm1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_ohc=m65G8Oe7gHUAX9nqE4t&oh=ce372a83907a4814277a8aa7e2c496e1&oe=5EF0140F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2";
	return <Container size={size} url={url} />;
};

Avatar.propTypes = {
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	url: PropTypes.string
};

export default Avatar;
