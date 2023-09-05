// require("dotenv").config();
const port = 6060;
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51NctanLx0gsR7F7OOalkP8SNBSJPggUvhHW6TnB2NuIzzT2hG5K18QJjPgVwzvvj6V4jEUOg3Y8TmjJf3A2rGULc00QOTcpSWI"
); // here goes the key from the .env
// - App config
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("its working"));

app.post("/payments/create", async (req, res) => {
	console.log("object");
	try {
		const total = req.query.total;
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});
		console.log(paymentIntent.client_secret);
		res.send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send("server error");
	}
});

app.listen(port, () => {
	console.log(`server is listening to ${port}`);
});
