import React from "react";
import "./Four04.css";

function Four04() {
	return (
		<div id="container">
			<div id="stage" className="stage">
				<div id="clouds" className="stage"></div>
			</div>

			<div id="ticket">
				<section id="ticket_left">
					<p className="text1_a">Lost in the clouds</p>
					<p className="text2_a">Flight not found</p>
					<p className="text3_a">Error 404</p>
					<p className="text4_a">Sorry!</p>
					<p className="text5_a">From</p>
					<p className="text6_a">Somewhere</p>
					<p className="text7_a">To</p>
					<p className="text8_a">Nowhere</p>
					<p className="text9_a">Seat</p>
					<p className="text10_a">404</p>
					<p className="text11_a">Try another flight</p>
					<nav className="text12_a">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Services</a>
							</li>
							<li>
								<a href="/">Blog</a>
							</li>
							<li>
								<a href="/">Portfolio</a>
							</li>
						</ul>
					</nav>
				</section>

				<section id="ticket_right">
					<p className="text1_b">First className</p>
					<p className="text2_b">Lost in the clouds</p>
					<p className="text3_b">From</p>
					<p className="text4_b">Somewhere</p>
					<p className="text5_b">To</p>
					<p className="text6_b">Nowhere</p>
					<p className="text7_b">Seat</p>
					<p className="text8_b">404</p>
					<p className="text9_b">1</p>
					<p className="text10_b">103076498</p>
				</section>
			</div>
		</div>
	);
}

export default Four04;
