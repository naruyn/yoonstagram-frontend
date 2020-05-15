import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Box = styled.div`
	${(props) => props.theme.whiteBox};
	border-radius: 0px;
`;

const StateChanger = styled(Box)`
	text-align: center;
	padding: 20px 0px;
	width: 350px;
`;

const Link = styled.span`
	color: ${(props) => props.theme.blueColor};
	cursor: pointer;
`;

export default () => {
	const [action, setAction] = useState("login");

	return (
		<Wrapper>
			<StateChanger>
				{action === "login" ? (
					<>
						계정이 없으신가요?{" "}
						<Link onClick={() => setAction("signUp")}>가입하기</Link>
					</>
				) : (
					<>
						계정이 있으신가요?{" "}
						<Link onClick={() => setAction("login")}>로그인</Link>
					</>
				)}
			</StateChanger>
		</Wrapper>
	);
};
