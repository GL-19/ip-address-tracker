import axios, { AxiosResponse } from "axios";
import { domainRegex, emailRegex, ipAddressRegex } from "../utils/regexes";

// api using IP Geolocation
export const api = axios.create({
	baseURL: "https://corsanywhere.herokuapp.com/https://geo.ipify.org/api/v2",
	/* baseURL: "https://geo.ipify.org/api/v2", */
});

export const getIp = async (param?: string): Promise<AxiosResponse> => {
	if (param?.match(emailRegex)) {
		return api.get(`country,city`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				email: param,
			},
		});
	}

	if (param?.match(domainRegex)) {
		return api.get(`country,city`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				domain: param,
			},
		});
	}

	if (param?.match(ipAddressRegex)) {
		return api.get(`country,city`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				ipAddress: param,
			},
		});
	}

	return api.get(`country,city`, {
		params: {
			apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
		},
	});
};
