import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "../Firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
	// // return const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) navigate("/");
				console.log(userCredential);
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
				console.log(errorMessage);
			});
	};

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(register(userCredential));
				if (userCredential) navigate("/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
				console.log(errorMessage);
			});
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="Logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>

				<form>
					{/* <h5>First Name</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/> */}

					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						// style={{ backgroundColor: "yellow " }}
						type="submit"
						onClick={signIn}
						className="login__signInButton bg-amber-400">
						Sign In
					</button>
				</form>

				<p className="login__agree">
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
