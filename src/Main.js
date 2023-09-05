import React, { useEffect } from "react";
import "./styles.css";
import "./bootstrap.css";
import Home from "./Components/Home";
import BottomNav from "./Components/BottomNav";
import Product from "./Components/Product";
import CarouselProduct from "./Components/CarouselProduct";
import Row from "./Components/Row";
import Row2 from "./Components/Row2";
import Carousal2 from "./Components/Carousal2";

function Main() {
	return (
		<>
			{/* <Header /> */}
			<BottomNav />
			<Home />
			<Product />
			<CarouselProduct />
			<Row />
			<Carousal2 />
			<Row2 secondRow />
			{/* <Footer /> */}
		</>
	);
}

export default Main;
