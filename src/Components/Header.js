import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../images/amazon.png";
import Flag from "../images/R.png";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [city, setCity] = useState();
	const [postal, setPostal] = useState();
	const navigator = useNavigate();

	// setting current city and postal using api
	useEffect(() => {
		axios
			.get("https://ipinfo.io/json?token=9792e4a0d74241")
			.then((response) => {
				setCity(response.data.city);
				setPostal(response.data.postal);
			});
	}, []);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	// check if the user is logged in and handle authentication
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		} else {
			navigator("/login");
		}
	};

	return (
		<div className="header">
			<Link lassName="underline" to="/">
				<img
					className="header__logo"
					src={Logo}
					alt="Amazon_Logo"
					onClick={scrollToTop}
				/>
			</Link>
			<div className="Mobile__size2">
				<span>{!user ? "Bereket" : user.email}</span>
				<Link lassName="underline" to="./Checkout">
					<span>
						<ShoppingCartOutlinedIcon className="cart" />
						{basket.length}
					</span>
				</Link>
				<Link className="underline" to={!user && "/login"}>
					<span onClick={handleAuthentication}>
						<LogoutIcon />
					</span>
				</Link>
			</div>
			<div className="header__option">
				<div className="header__optionLineOneL">
					Deliver to {!user ? "Bereket" : user.email}
				</div>
				<div className="header__optionLineTwo">
					<FmdGoodOutlinedIcon className="location" />
					<span style={{ marginTop: "5px" }}>
						{/* Washington... 20001‌ */}
						{city} {postal}
					</span>
				</div>
			</div>
			<select name="departments " className="header__drop">
				<option selected="selected" value="search-alias=aps">
					All
				</option>
				<option value="selected">All departments</option>
				<option value="search-alias=alexa-skills">Alexa Skills</option>
				<option value="search-alias=amazon-devices">Amazon Devices</option>
				<option value="search-alias=amazonfresh">Amazon Fresh</option>
				<option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
				<option value="search-alias=warehouse-deals">Amazon Warehouse</option>
				<option value="search-alias=appliances">Appliances</option>
				<option value="search-alias=mobile-apps">Apps & Games</option>
				<option value="search-alias=arts-crafts">Arts, Crafts & Sewing</option>
				<option value="search-alias=audible">Audible Books & Originals</option>
				<option value="search-alias=automotive">
					Automotive Parts & Accessories
				</option>
				<option value="search-alias=baby-products">Baby</option>
				<option value="search-alias=beauty">Beauty & Personal Care</option>
				<option value="search-alias=stripbooks">Books</option>
				<option value="search-alias=popular">CDs & Vinyl</option>
				<option value="search-alias=mobile">Cell Phones & Accessories</option>
				<option value="search-alias=fashion">Clothing, Shoes & Jewelry</option>
				<option value="search-alias=fashion-womens">
					&#160;&#160;&#160;Women
				</option>
				<option value="search-alias=fashion-mens">&#160;&#160;&#160;Men</option>
				<option value="search-alias=fashion-girls">
					&#160;&#160;&#160;Girls
				</option>
				<option value="search-alias=fashion-boys">
					&#160;&#160;&#160;Boys
				</option>
				<option value="search-alias=fashion-baby">
					&#160;&#160;&#160;Baby
				</option>
				<option value="search-alias=collectibles">
					Collectibles & Fine Art
				</option>
				<option value="search-alias=computers">Computers</option>
				<option value="search-alias=financial">Credit and Payment Cards</option>
				<option value="search-alias=digital-music">Digital Music</option>
				<option value="search-alias=electronics">Electronics</option>
				<option value="search-alias=lawngarden">Garden & Outdoor</option>
				<option value="search-alias=gift-cards">Gift Cards</option>
				<option value="search-alias=grocery">Grocery & Gourmet Food</option>
				<option value="search-alias=handmade">Handmade</option>
				<option value="search-alias=hpc">Health, Household & Baby Care</option>
				<option value="search-alias=local-services">
					Home & Business Services
				</option>
				<option value="search-alias=garden">Home & Kitchen</option>
				<option value="search-alias=industrial">Industrial & Scientific</option>
				<option value="search-alias=prime-exclusive">Just for Prime</option>
				<option value="search-alias=digital-text">Kindle Store</option>
				<option value="search-alias=fashion-luggage">
					Luggage & Travel Gear
				</option>
				<option value="search-alias=luxury">Luxury Stores</option>
				<option value="search-alias=magazines">Magazine Subscriptions</option>
				<option value="search-alias=movies-tv">Movies & TV</option>
				<option value="search-alias=mi">Musical Instruments</option>
				<option value="search-alias=office-products">Office Products</option>
				<option value="search-alias=pets">Pet Supplies</option>
				<option value="search-alias=luxury-beauty">Premium Beauty</option>
				<option value="search-alias=instant-video">Prime Video</option>
				<option value="search-alias=smart-home">Smart Home</option>
				<option value="search-alias=software">Software</option>
				<option value="search-alias=sporting">Sports & Outdoors</option>
				<option value="search-alias=specialty-aps-sns">Subscribe & Save</option>
				<option value="search-alias=subscribe-with-amazon">
					Subscription Boxes
				</option>
				<option value="search-alias=tools">Tools & Home Improvement</option>
				<option value="search-alias=toys-and-games">Toys & Games</option>
				<option value="search-alias=under-ten-dollars">Under $10</option>
				<option value="search-alias=videogames">Video Games</option>
				<option value="search-alias=wholefoods">Whole Foods Market</option>
			</select>
			<div className="header__search">
				<input
					className="header__searchInput"
					type="text"
					placeholder="Search Amazon"
				/>
				<Link to="./Four04">
					<SearchIcon className="header__searchIcon" />
				</Link>
			</div>
			<div>
				<select name="value" className="header__drop2">
					<img src={Flag} alt="USA_Flag" />
					<option>EN</option>
					<option>French</option>
					<option>Espanol</option>
					<option>Amharic</option>
				</select>
			</div>
			<div className="header__nav">
				<div className="header__option margin-top sign-inOut">
					<span className="header__optionLineOne">
						Hello, {!user ? "User" : user.email}
					</span>
					{/* <span className="header__optionLineTwo">Account & Lists</span> */}
					<Link to={!user && "/login"}>
						<span className="underline" onClick={handleAuthentication}>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</Link>
				</div>
				<Link to="./orders">
					<div className="header__option margin-top RandO underline">
						<span className="header__optionLineOne ">Returns</span>
						<span className="header__optionLineTwo ">& Orders</span>
					</div>
				</Link>
				<Link lassName="underline" to="./Checkout" onClick={scrollToTop}>
					<div className="header__option2">
						{/* <span className="header__optionLineOneR">{basket.length}</span> */}
						<span className="header__optionLine2">
							<ShoppingCartOutlinedIcon className="cart" />
							{/* {basket.length} */}
							<span className="Mobile__Size">{basket.length}</span>
						</span>
					</div>
				</Link>
				<span className="cart__name">
					<span className="header__counter">{basket.length}</span>Cart
				</span>
			</div>
		</div>
	);
}

export default Header;
