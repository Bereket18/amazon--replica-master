import CarouselOne from "../images/61d7G2g5MaL._SX3000_.jpg";
import CarouselTwo from "../images/carousel_1.jpg";
import CarouselThree from "../images/71QEvJOmFrL._SR3000,600_.jpg";
import Carousel from "react-bootstrap/Carousel";
import CarouselVid from "../images/carousel_vid.mp4";
import "./Home.css";

function Home() {
	return (
		<div className="home">
			<Carousel fade>
				<Carousel.Item style={{ backgroundColor: "black" }}>
					<video controls autoPlay style={{ height: "300px", width: "100%" }}>
						<source src={CarouselVid} type="video/mp4" autoPlay />
					</video>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 home__image"
						src={CarouselOne}
						alt="First slide"
						style={{ height: "730px", width: "100%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 home__image"
						src={CarouselTwo}
						alt="First slide"
						style={{ height: "730px", width: "100%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 home__image"
						src={CarouselThree}
						alt="First slide"
						style={{ height: "430px", width: "100%" }}
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
export default Home;
