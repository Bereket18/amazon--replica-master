import CurrencyFormat from "react-currency-format";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails";
import "./checkout.css";
// import { ET_CURRENCY } from "../../utils/constants";
import {
	// removeFromCart,
	decrementInCart,
	incrementInCart,
} from "../../redux/cartSlice";
import { useStateValue } from "../StateProvider";
import { useSelector } from "react-redux";
import ProductRatings from "../ProductRatings";

const Checkout = ({
	id,
	image,
	title,
	price,
	ratings,
	hideButton,
	hideButton2,
	hideTitle,
	hideTotal,
}) => {
	const products = useSelector((state) => state.cart.products);

	const [{ basket, user }, dispatch] = useStateValue();
	// const id = basket.item.id;

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	const getBasketTotal = (basket) =>
		basket?.reduce(
			(amount, item) =>
				Number(item.price.current_price)
					? Number(item.price.current_price) + amount
					: Number(item.price) + amount,
			0
		);

	// const navigate = useNavigate();

	return (
		<div
			style={{ zIndex: "1", bottom: "50px" }}
			className=" bg-amazonclone-background">
			<div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
				<CurrencyFormat
					renderText={(value) => (
						<div className="grid grid-cols-8 gap-10" key={1}>
							{/* Products */}
							<div className="col-span-6 bg-white">
								{!hideTitle && (
									<div className="text-2xl xl:text-3xl m-4  text-green-900 bold italic">
										Shopping Cart
									</div>
								)}
								{basket.map((item) => {
									// id = item.id;
									return (
										<div key={item.id}>
											<div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
												<div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
													<div className="col-span-2">
														<Link to={`/product/${products.id}`}>
															{image}
															<img
																className="p-4 m-auto"
																src={
																	item.thumbnail ||
																	item.image ||
																	item.image_small
																}
																alt="Checkout product"
															/>
														</Link>
													</div>
													<div className="col-span-6">
														<div className="font-medium text-black mt-2">
															<Link
																to={`/product/${products.id}`}
																style={{ textDecorationLine: "none" }}>
																<ProductDetails product={item} ratings={true} />
															</Link>
														</div>
														{ratings && (
															<div className="text-sm xl:text-base mb-1">
																<ProductRatings
																	avgRating={
																		item.avgRating || item.reviews.rating
																	}
																	ratings={true}
																/>
															</div>
														)}
														{!hideButton && (
															<button
																variant="warning"
																// className=" btn bg-yellow-400 w-full p-3  rounded hover:bg-yellow-500 mt-3">
																id={item.id}
																style={{
																	borderColor: "beige",
																	hover: "underline",
																}}
																className=" btn bg-yellow-400 hover:bg-yellow-500  text-sm xl:text-base font-semibold rounded text-black-500 mt-3 mb-5 cursor-pointer"
																//
																onClick={removeFromCart}>
																Delete
															</button>
														)}{" "}
														{/* <div className="grid grid-cols-3 w-20 text-center">
															<div
																className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
																onClick={() =>
																	dispatch(decrementInCart(item.id))
																}>
																-
															</div>
															<div className="text-lg xl:text-xl bg-gray-200">
																{item.quantity}
															</div>
															<div
																className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
																onClick={() =>
																	dispatch(incrementInCart(item.id))
																}>
																+
															</div>
														</div> */}
													</div>
												</div>
												<div className="col-span-2">
													<div className="text-lg xl:text-xl mt-2 mr-7 font-semibold">
														{/* {ET_CURRENCY.format(item.price)} */}
														{price}
														<>{item.price.current_price || item.price}</>
													</div>
												</div>
											</div>
										</div>
									);
								})}
								{!hideTotal && (
									<div className="text-lg xl:text-xl text-right mb-4 mr-4">
										Subtotal ({basket.length} items):{" "}
										<span className="font-semibold">
											{/* {ET_CURRENCY.format({ value })} */}
											<>{value}</>
										</span>
									</div>
								)}
							</div>
							{/* Checkout */}
							{!hideButton2 && (
								<div className="ck-1 col-span-2 bg-white rounded h-[250px] p-7 sm-none">
									<div className="text-xs xl:text-sm text-green-800 mb-2">
										Your order qualifies for{" "}
										<span className="font-bold">FREE DELIVERY</span>. Delivery
										Details
									</div>
									<div className="text-base xl:text-lg mb-4">
										Subtotal ({basket.length} items):{" "}
										<span className="font-semibold">
											{/* {ET_CURRENCY.format({ value })} */}
											<>{value}</>
										</span>
									</div>
									<small
										className="subtotal__gift"
										style={{
											fontSize: "15px",
											display: "flex",
											alignItems: "center",
											marginTop: "13px",
										}}>
										<input style={{ height: "20px" }} type="checkbox" /> This
										order contains a gift
									</small>
									<Link to={user ? "/payment" : "/login"}>
										<Button
											// onClick={(e) => navigate("/payment")}
											variant="warning"
											className=" btn bg-yellow-400 w-full p-3  rounded hover:bg-yellow-500 mt-3">
											Proceed to Checkout
										</Button>
									</Link>
								</div>
							)}{" "}
							{!hideButton2 && (
								<Link to={user ? "/payment" : "/login"}>
									<button
										className="btn btn-warning mt-3 mb-3  w-full p-3  rounded hover:bg-yellow-500 "
										style={{ width: "300px", marginLeft: "200px" }}>
										{" "}
										Process to checkout
									</button>
								</Link>
							)}{" "}
						</div>
					)}
					decimalScale={2}
					value={getBasketTotal(basket)}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
				/>
			</div>
		</div>
	);
};

export default Checkout;
