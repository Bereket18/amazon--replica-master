import { Routes, Route } from "react-router-dom";
import "./styles.css";
import "./bootstrap.css";

// Home page
import SharedLayouts from "../src/Components/pages/SharedLayouts";
import Checkout from "./Components/pages/Checkout";
import Main from "./Main";
import Four04 from "../src/Components/pages/Four04";
import ProductPage from "./Components/ProductPage";
import Login from "./Components/pages/Login";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/Firebase";
import Payment from "./Components/pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/pages/Orders";

const promise = loadStripe(
	"pk_test_51NiM9RICThjfv2sodw8pL6uDlLxcnlz0k79Q7YRIi7kYGDoQOzMBTQUBljHT8sbGGCUg0QXHJABWbmR5UkwYCBxv00GaoOiwF6"
);

function App() {
	// console.log(process.env_REACT_APP_APP_API);
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayouts />}>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/orders" element={<Orders />} />
					<Route
						path="/Payment"
						element={
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						}
					/>
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
