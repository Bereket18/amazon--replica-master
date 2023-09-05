import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row1 from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Row.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function Row2() {
	const [Products, setProducts] = useState([]);
	// const [trailerUrl, setTrailerUrl] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const request = await axios.get("./newProducts.json");
				const result = request.data;
				console.log(result);
				// const arr = result.products;
				const Pro = result.slice(11, 16);
				console.log(Pro);
				setProducts(Pro);
				// console.log(request);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	// console.log(Products);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	const [{ basket }, dispatch] = useStateValue();
	console.log("this is the basket", basket);
	const addToBasket = (product) => {
		dispatch({
			type: "ADD_TO_BASKET",
			payload: product,
		});
	};

	return (
		<Container className="container-fluid row__wrapper">
			<Row1 key={Products.id}>
				<Col className="row__posters">
					{Products.map((Products) => (
						<Card style={{ width: "17rem" }} key={Products.id}>
							<Card.Img
								variant="top"
								src={Products.thumbnail}
								className="row__poster"
							/>
							<Card.Body>
								<Card.Title
									className="title"
									style={{ fontSize: "25px", fontWeight: "300" }}>
									{truncate(Products?.title, 40)}
								</Card.Title>
								<Card.Text>{truncate(Products?.description, 11)}</Card.Text>
							</Card.Body>
							<Card.Title className="price">{`$ ${
								Products.price.currency && Products.price.current_price
								// parseCurrentPrice(Products.price.current_price)
							}`}</Card.Title>
							<Button
								key={Products.id}
								onClick={() => addToBasket(Products)}
								className="btn bg-yellow-400"
								// style={{ backgroundColor: "#f9a02c" }}
								variant="warning secondary"
								size="sm">
								add to cart
							</Button>
						</Card>
					))}
				</Col>
			</Row1>
		</Container>
	);
}

export default Row2;
