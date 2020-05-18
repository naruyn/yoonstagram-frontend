import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Box = styled.div`
	${(props) => props.theme.whiteBox};
	border-radius: 0px;
	width: 100%;
	max-width: 350px;
`;

const StateChanger = styled(Box)`
	text-align: center;
	padding: 20px 0px;
`;

const Link = styled.span`
	color: ${(props) => props.theme.blueColor};
	cursor: pointer;
`;

const Form = styled(Box)`
	padding: 40px;
	padding-bottom: 30px;
	margin-bottom: 15px;
	form {
		input {
			width: 100%;
			&:not(:last-child) {
				margin-bottom: 7px;
			}
			font-size: 12px;
		}
		button {
			margin-top: 10px;
		}
	}
`;

export default ({
	setAction,
	action,
	username,
	firstName,
	lastName,
	email,
	secret,
	onSubmit
}) => (
	<Wrapper>
		<Form>
			{action === "login" && (
				<form onSubmit={onSubmit}>
					<Input placeholder={"Email"} {...email} type="email" />
					<Button text={"로그인"} />
				</form>
			)}
			{action === "signUp" && (
				<form onSubmit={onSubmit}>
					<Input placeholder={"Firstname"} {...firstName} />
					<Input placeholder={"Lastname"} {...lastName} />
					<Input placeholder={"Email"} {...email} type="email" />
					<Input placeholder={"Username"} {...username} />
					<Button text={"가입하기"} />
				</form>
			)}
			{action === "confirm" && (
				<form onSubmit={onSubmit}>
					<Input
						placeholder={"Write your login secret."}
						required
						{...secret}
					/>
					<Button text={"확인"} />
				</form>
			)}
		</Form>
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
