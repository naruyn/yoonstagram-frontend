import React from "react";
import Helmet from "react-helmet";
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
	onSubmit,
	onClick
}) => (
	<Wrapper>
		<Form>
			{action === "login" && (
				<>
					<Helmet>
						<title>Login | yoonstagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input
							placeholder={"Email"}
							value={email.value}
							onChange={email.onChange}
							type="email"
						/>
						<Button text={"로그인"} />
					</form>
				</>
			)}
			{action === "signup" && (
				<>
					<Helmet>
						<title>Signup | yoonstagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input
							placeholder={"Firstname"}
							value={firstName.value}
							onChange={firstName.onChange}
						/>
						<Input
							placeholder={"Lastname"}
							value={lastName.value}
							onChange={firstName.onChange}
						/>
						<Input
							placeholder={"Email"}
							value={email.value}
							onChange={email.onChange}
							type="email"
						/>
						<Input
							placeholder={"Username"}
							value={username.value}
							onChange={username.onChange}
						/>
						<Button text={"가입하기"} />
					</form>
				</>
			)}
			{action === "confirm" && (
				<>
					<Helmet>
						<title>Cofirm | yoonstagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input
							placeholder={"Write your login secret."}
							required
							value={secret.value}
							onChange={secret.onChange}
						/>
						<Button text={"확인"} />
					</form>
				</>
			)}
		</Form>
		{action !== "confirm" && (
			<StateChanger>
				{action === "login" ? (
					<>
						계정이 없으신가요?{" "}
						<Link onClick={() => onClick("signup")}>가입하기</Link>
					</>
				) : (
					<>
						계정이 있으신가요?{" "}
						<Link onClick={() => onClick("login")}>로그인</Link>
					</>
				)}
			</StateChanger>
		)}
	</Wrapper>
);
