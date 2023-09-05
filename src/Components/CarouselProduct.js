import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselPro.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
// import { useParams } from "react-router-dom";

export default function CarouselProduct({ secondPro }) {
	const [Products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const request = await axios.get("./products.json");
				// const arr = Object.keys(request);
				// console.log(arr);
				const Pro = request.data.slice(7, 17);
				setProducts(Pro);
				// console.log(request);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	console.log(Products);

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
		<>
			<div className="container-fluid mySwipers">
				<Swiper
					key={Products.id}
					// onSwiper={setSwiperRef}
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="row mySwiper my-wrapper"
					style={{
						width: " 100%",
						height: "380px",
						margin: " 70px auto",
						backgroundColor: "whitesmoke",
					}}>
					{Products.map((Products) => (
						<SwiperSlide
							xs={12}
							key={Products.id}
							className=" col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12  transition slid"
							style={{
								width: "270px",
								textAlign: "center",
								fontSize: "18px",
								background: " #fff",
							}}>
							<img
								src={Products.image_small}
								alt=""
								className="carouselPic"></img>
							<h1 style={{ fontSize: "18px", fontWeight: "600" }}>
								{truncate(Products?.title, 40)}
							</h1>
							<p style={{ fontSize: "14px" }}>
								{truncate(Products?.description, 60)}
							</p>
							<Button
								key={Products.id}
								onClick={() => addToBasket(Products)}
								// style={{ backgroundColor: "#f9a02c" }}
								className="btn bg-yellow-400"
								variant="warning secondary"
								size="sm">
								add to cart
							</Button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
