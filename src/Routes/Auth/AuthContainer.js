import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
	LOG_IN,
	CREATE_ACCOUNT,
	CONFIRM_SECRET,
	LOCAL_LOG_IN
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
	const [action, setAction] = useState("login");

	const username = useInput("");
	const firstName = useInput("");
	const lastName = useInput("");
	const email = useInput("");
	const secret = useInput("");
	const [requestSecretMutation] = useMutation(LOG_IN, {
		variables: { email: email.value }
	});
	const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
		variables: {
			username: username.value,
			email: email.value,
			firstName: firstName.value,
			lastName: lastName.value
		}
	});
	const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
		variables: {
			email: email.value,
			secret: secret.value
		}
	});
	const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

	const initInput = (action) => {
		setAction(action);
		email.setValue("");
		username.setValue("");
		firstName.setValue("");
		lastName.setValue("");
		secret.setValue("");
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (action === "login") {
			if (email.value !== "") {
				try {
					const {
						data: { requestSecret }
					} = await requestSecretMutation();
					if (!requestSecret) {
						toast.error("You don't have an account, create one!", {
							onClose: () => setAction("signup"),
							autoClose: 3000
						});
					} else {
						toast.success("Check your email. And put login secret in box");
						setAction("confirm");
					}
					email.setValue("");
				} catch {
					toast.error("Request is fail. Try again");
				}
			} else {
				toast.error("Email is required");
			}
		} else if (action === "signup") {
			if (
				username.value !== "" &&
				email.value !== "" &&
				firstName.value !== "" &&
				lastName.value !== ""
			) {
				try {
					const {
						data: { createAccount }
					} = await createAccountMutation();
					if (!createAccount) {
						toast.error("Can't create account.");
					} else {
						toast.success("Account created. Please Login/", {
							onClose: () => setAction("login"),
							autoClose: 3000
						});
					}
					username.setValue("");
					email.setValue("");
					firstName.setValue("");
					lastName.setValue("");
				} catch (e) {
					toast.error(e.message);
				}
			} else {
				toast.error("All fields are required");
			}
		} else if (action === "confirm") {
			if (secret.value !== "") {
				try {
					const {
						data: { confirmSecret: token }
					} = await confirmSecretMutation();
					if (token !== "" && token !== undefined) {
						localLogInMutation({ variables: { token } });
						secret.setValue("");
					} else {
						throw Error();
					}
				} catch (e) {
					toast.error("Can't confirm secret, check again");
				}
			}
		}
	};

	return (
		<AuthPresenter
			setAction={setAction}
			action={action}
			username={username}
			firstName={firstName}
			lastName={lastName}
			email={email}
			secret={secret}
			onSubmit={onSubmit}
			onClick={initInput}
		/>
	);
};
