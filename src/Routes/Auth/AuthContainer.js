import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
	const [action, setAction] = useState("login");

	const username = useInput("");
	const firstName = useInput("");
	const lastName = useInput("");
	const email = useInput("");
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
							onClose: () => setAction("signUp"),
							autoClose: 3000
						});
					}
				} catch {
					toast.error("Request is fail. Try again");
				}
			} else {
				toast.error("Email is required");
			}
		} else if (action === "signUp") {
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
				} catch (e) {
					toast.error(e.message);
				}
			} else {
				toast.error("All fields are required");
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
			onSubmit={onSubmit}
		/>
	);
};
