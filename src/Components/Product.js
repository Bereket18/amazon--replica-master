import React from "react";
import "./Product.css";
import pro1 from "../images/61q-OwacezL._AC_SY135_.jpg";
import pro2 from "../images/61H0C0nYLbL._AC_SY135_.jpg";
import pro3 from "../images/81q-NoPyy1L._AC_SY135_.jpg";
import pro4 from "../images/81ekm3neBrL._AC_SY135_.jpg";
import pro5 from "../images/91yikPT3EoL._AC_SY230_.jpg";
import pro6 from "../images/XCM_CUTTLE_1403559_2143746_US_CUTTLE_379x304_1X_en_US._SY304_CB649051835_.jpg";
import pro7 from "../images/product_13.jpg";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Product() {
	return (
		<>
			<div className="container-fluid">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="row mySwiper"
					style={{ marginTop: "300px" }}>
					<SwiperSlide className=" col-xl-3 box1 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "25px",
								fontWeight: "700",
								paddingTop: "10px",
								paddingBottom: "5px",
							}}>
							pick up where you left off
						</h4>
						<div className="box__img1">
							<img src={pro1} alt="book1"></img>
							<img src={pro2} alt="book1"></img>
						</div>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									fontWeight: "400",
								}}>
								The Supermajority: Ho…
							</p>
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									fontWeight: "400",
								}}>
								The Second Amendme…
							</p>
						</span>
						<div className="box__img2">
							<img src={pro3} alt="book1"></img>
							<img src={pro4} alt="book1"></img>
						</div>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "10px",
									MarginTop: "0PX",
								}}>
								The Shadow Docket: H…
							</p>
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								Nine Black Robes: Insid…
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide className=" col-xl-3 box2 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "25px",
								fontWeight: "700",
								paddingTop: "10px",
								paddingBottom: "10px",
							}}>
							Top Deal
						</h4>
						<img src={pro5} alt="book1"></img>
						<br />
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								<strong
									style={{
										borderRadius: "2px solid",
										marginRight: "6px",
										padding: "4px 6px",
										backgroundColor: "#CC0C39",
										color: "white",
										fontSize: "12px",
										fontWeight: "700",
										lineHeight: "52px",
									}}>
									Up to 40% off
								</strong>{" "}
								<strong
									style={{
										color: "#CC0C39",
										fontSize: "12px",
										fontWeight: "700",
										lineHeight: "52px",
									}}>
									Top deal
								</strong>
								<br />
								<span
									style={{
										fontSize: "15px",
										fontWeight: "500",
										padding: "0 10px",
										height: "2.5em",
										display: "inline-block",
										width: "100%",
										whiteSpace: "normal",
									}}>
									Organizer Storage Tray with Hooks, Adjustable Desks, and
									Clothing Garment Racks from SimpleH...
								</span>
								<span>
									<Link
										href="/"
										style={{
											textAlign: "center",
											fontSize: "15px",
											fontWeight: "400",
											textDecoration: "none",
											color: "#007185",
											paddingLeft: "10px",
										}}>
										See all deals
									</Link>
								</span>
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide className=" col-xl-3 box3 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "20px",
								fontWeight: "600",
								paddingTop: "10px",
								paddingBottom: "10px",
							}}>
							Shop summer deals with Alexa
						</h4>
						<img src={pro6} alt="book1"></img>
						<span
							style={{
								color: "black",
								fontSize: "15px",
								fontWeight: "500",
								padding: "0 10px",
								height: "2.5em",
								display: "inline-block",
								width: "100%",
								whiteSpace: "normal",
							}}>
							Try the experience of the new deal with alexa.
						</span>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								<span>
									<Link
										href="/"
										style={{
											textAlign: "center",
											fontSize: "15px",
											fontWeight: "400",
											textDecoration: "none",
											color: "#007185",
											paddingLeft: "10px",
										}}>
										Shop alexa
									</Link>
								</span>
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide className=" col-xl-3 box4 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "25px",
								fontWeight: "700",
								paddingTop: "10px",
								paddingBottom: "10px",
								paddingRight: "20px",
							}}>
							Shop Iphone 13
						</h4>
						<img src={pro7} alt="book1"></img>
						<span
							style={{
								color: "black",
								fontSize: "15px",
								fontWeight: "500",
								padding: "0 10px",
								height: "2.5em",
								display: "inline-block",
								width: "100%",
								whiteSpace: "normal",
							}}>
							New experience with Iphone.
						</span>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								<span>
									<Link
										href="/"
										style={{
											textAlign: "center",
											fontSize: "15px",
											fontWeight: "400",
											textDecoration: "none",
											color: "#007185",
											paddingLeft: "10px",
										}}>
										Shop Iphone
									</Link>
								</span>
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide className=" col-xl-3 box4 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "25px",
								fontWeight: "700",
								paddingTop: "10px",
								paddingBottom: "10px",
								paddingRight: "20px",
							}}>
							Shop Iphone 13
						</h4>
						<img src={pro7} alt="book1"></img>
						<span
							style={{
								color: "black",
								fontSize: "15px",
								fontWeight: "500",
								padding: "0 10px",
								height: "2.5em",
								display: "inline-block",
								width: "100%",
								whiteSpace: "normal",
							}}>
							New experience with Iphone.
						</span>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								<span>
									<Link
										href="/"
										style={{
											textAlign: "center",
											fontSize: "15px",
											fontWeight: "400",
											textDecoration: "none",
											color: "#007185",
											paddingLeft: "10px",
										}}>
										Shop Iphone
									</Link>
								</span>
							</p>
						</span>
					</SwiperSlide>
					<SwiperSlide className=" col-xl-3 box4 box">
						<h4
							style={{
								color: "black",
								textAlign: "center",
								fontSize: "25px",
								fontWeight: "700",
								paddingTop: "10px",
								paddingBottom: "10px",
								paddingRight: "20px",
							}}>
							Shop Iphone 13
						</h4>
						<img src={pro7} alt="book1"></img>
						<span
							style={{
								color: "black",
								fontSize: "15px",
								fontWeight: "500",
								padding: "0 10px",
								height: "2.5em",
								display: "inline-block",
								width: "100%",
								whiteSpace: "normal",
							}}>
							New experience with Iphone.
						</span>
						<span className="description">
							<p
								style={{
									fontSize: "13px",
									color: "black",
									paddingLeft: "25px",
									paddingTop: "0px",
									MarginTop: "0PX",
								}}>
								<span>
									<Link
										href="/"
										style={{
											textAlign: "center",
											fontSize: "15px",
											fontWeight: "400",
											textDecoration: "none",
											color: "#007185",
											paddingLeft: "10px",
										}}>
										Shop Iphone
									</Link>
								</span>
							</p>
						</span>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
