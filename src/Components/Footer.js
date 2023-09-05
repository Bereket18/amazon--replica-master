import { useEffect } from "react";
import Ico from "../images/16.png";
import $ from "jquery";
import Logo from "../images/amazon.png";
import { Padding } from "@mui/icons-material";
// import { Link } from "react-router-dom";

function Footer() {
	useEffect(() => {
		if ($(window).width() <= 768) {
			$(".footer-links-wrapper").addClass("someClass");
		} else {
			$(".footer-links-wrapper").removeClass("someClass");
		}
		$(window).on("resize", function (event) {
			if ($(window).width() <= 768) {
				$(".footer-links-wrapper").addClass("someClass");
			} else {
				$(".footer-links-wrapper").removeClass("someClass");
				$(".footer-links-wrapper ul").show();
			}
		});
		// Footer collapse functionality
		$(document).on("click", ".someClass h3", function () {
			$(this).next("ul").slideToggle();
			$(this).toggleClass("expanded");
		});
	});

	return (
		<>
			<footer className="footer-wrapper">
				<div className="container">
					<div className="footer-links-wrapper row">
						<div className="links-wrapper-1 col-sm-12 col-md">
							<h3 className="showHide">Shop and Learn</h3>
							<ul className="toggler">
								<li>
									<a href="/">Mac</a>
								</li>
								<li>
									<a href="/">iPad</a>
								</li>
								<li>
									<a href="/">iPhone</a>
								</li>
								<li>
									<a href="/">Watch</a>
								</li>
								<li>
									<a href="/">TV</a>
								</li>
								<li>
									<a href="/">Music</a>
								</li>
								<li>
									<a href="/">AirPods</a>
								</li>
								<li>
									<a href="/">HomePod</a>
								</li>
								<li>
									<a href="/">iPod touch</a>
								</li>
								<li>
									<a href="/">Accessories</a>
								</li>
								<li>
									<a href="/">Gift Cards</a>
								</li>
							</ul>
						</div>
						<div className="links-wrapper-2 col-sm-12 col-md">
							<h3 className="showHide">Services</h3>
							<ul className="toggler">
								<li>
									<a href="/">Amazon Music</a>
								</li>
								<li>
									<a href="/">Amazon News+</a>
								</li>
								<li>
									<a href="/">Amazon TV+</a>
								</li>
								<li>
									<a href="/">Amazon Arcade</a>
								</li>
								<li>
									<a href="/">Amazon Card</a>
								</li>
								<li>
									<a href="/">iCloud</a>
								</li>
							</ul>
							<h3 className="showHide">Account</h3>
							<ul className="toggler">
								<li>
									<a href="/">Manage Your Amazon ID</a>
								</li>
								<li>
									<a href="/">Amazon Store Account</a>
								</li>
								<li>
									<a href="/">iCloud.com</a>
								</li>
							</ul>
						</div>
						<div className="links-wrapper-3 col-sm-12 col-md">
							<h3 className="showHide">Amazon Store</h3>
							<ul className="toggler">
								<li>
									<a href="/">Find a Store</a>
								</li>
								<li>
									<a href="/">Genius Bar</a>
								</li>
								<li>
									<a href="/">Today at Amazon</a>
								</li>
								<li>
									<a href="/">Amazon Camp</a>
								</li>
								<li>
									<a href="/">Field Trip</a>
								</li>
								<li>
									<a href="/">Amazon Store App</a>
								</li>
								<li>
									<a href="/">Refurbished and Clearance</a>
								</li>
								<li>
									<a href="/">Financing</a>
								</li>
								<li>
									<a href="/">Amazon Trade In</a>
								</li>
								<li>
									<a href="/">Order Status</a>
								</li>
								<li>
									<a href="/">Shopping Help</a>
								</li>
							</ul>
						</div>
						<div className="links-wrapper-4 col-sm-12 col-md">
							<h3 className="showHide">For Business</h3>
							<ul className="toggler">
								<li>
									<a href="/">Amazon and Business</a>
								</li>
								<li>
									<a href="/">Shop for Business</a>
								</li>
							</ul>
							<h3 className="showHide">For Education</h3>
							<ul className="toggler">
								<li>
									<a href="/">Amazon and Education</a>
								</li>
								<li>
									<a href="/">Shop for College</a>
								</li>
							</ul>
							<h3 className="showHide">For Healthcare</h3>
							<ul className="toggler">
								<li>
									<a href="/">Manage Your Amazon ID</a>
								</li>
								<li>
									<a href="/">Amazon Store Account</a>
								</li>
								<li>
									<a href="/">iCloud.com</a>
								</li>
							</ul>
							<h3 className="showHide">For Government</h3>
							<ul className="toggler">
								<li>
									<a href="/">Amazon and Education</a>
								</li>
								<li>
									<a href="/">Shop for College</a>
								</li>
							</ul>
						</div>
						<div className="links-wrapper-5 col-sm-12 col-md">
							<h3 className="showHide">Amazon Values</h3>
							<ul className="toggler">
								<li>
									<a href="/">Find a Store</a>
								</li>
								<li>
									<a href="/">Genius Bar</a>
								</li>
								<li>
									<a href="/">Today at Amazon</a>
								</li>
								<li>
									<a href="/">Amazon Camp</a>
								</li>
								<li>
									<a href="/">Field Trip</a>
								</li>
								<li>
									<a href="/">Amazon Store App</a>
								</li>
							</ul>
							<h3 className="showHide">About Amazon</h3>
							<ul className="toggler">
								<li>
									<a href="/">Find a Store</a>
								</li>
								<li>
									<a href="/">Genius Bar</a>
								</li>
								<li>
									<a href="/">Today at Amazon</a>
								</li>
								<li>
									<a href="/">Amazon Camp</a>
								</li>
								<li>
									<a href="/">Field Trip</a>
								</li>
								<li>
									<a href="/">Amazon Store App</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="my-apple-wrapper dark dk-2">
						More ways to shop: <a href="/">Find an Amazon Store</a> or{" "}
						<a href="/">other retailer</a> near you. Or call 1-800-MY-PRIME.
					</div>
					<div className="copyright-wrapper row dark">
						<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
							Copyright &copy; 2024 Amazon Inc. All rights reserved.
						</div>
						<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
							<ul className="toggler">
								<li>
									<a href="/"> Privacy Policy </a>
								</li>
								<li>
									<a href="/"> Terms of Use </a>
								</li>
								<li>
									<a href="/"> Sales and Refunds </a>
								</li>
								<li>
									<a href="/"> Legal </a>
								</li>
								<li>
									<a href="/"> Site Map </a>
								</li>
							</ul>
						</div>
						<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
							<div className="flag-wrapper">
								<img src={Ico} alt="" />
							</div>
							<div className="footer-country-name">United States</div>
						</div>
					</div>
				</div>
				<div
					style={{
						alignItems: "center",
						justifyContent: "center",
						justifyItems: "center",
						marginLeft: "600px",
					}}>
					<div>
						<img
							src={Logo}
							alt=""
							style={{ height: "35px", width: "100px", margin: "auto 10px" }}
						/>
					</div>
					<div style={{ fontSize: "20px" }}>Built By: BEREKET ADAMSSEGED</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
