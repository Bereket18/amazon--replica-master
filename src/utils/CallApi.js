import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

export const callAPI = async (resource) => {
	const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
	return data;
};

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "http://127.0.0.1:5001/replica-01/us-central1/api",
});

export default instance;
