import React from "react";
import "./order.css";
import moment from "moment";
// import Checkout from "./Checkout";
import CurrencyFormat from "react-currency-format";
function Order({ order, props }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{/* <Checkout hideButton /> */}
			{order.data.basket?.map((item) => (
				<div className="SelectedProduct">
					<img
						className="SelectedProduct__image"
						src={item.thumbnail || item.image || item.image_small}
						alt=""
					/>
					<div className="SelectedProduct__info">
						<p className="SelectedProduct__title">{item.title}</p>
						<p className="SelectedProduct__price">
							<small>$</small>
							<strong>{item.price.current_price || item.price}</strong>
						</p>
						<div className="SelectedProduct__rating">
							{/* This Array() constructor w/h takes integer value as a parameter method creates an empty array that can hold this many array elemets. It holds space for this many number of the upcoming array elements that will be filled by fill() method */}
							{Array(4)
								.fill()
								.map((_, i) => (
									<p key={i}>★</p>
									// <p>⭐</p>
									// <p>⭐</p>
									//<p key={i}>🌟</p>
								))}
						</div>
					</div>
				</div>
			))}

			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Order;
