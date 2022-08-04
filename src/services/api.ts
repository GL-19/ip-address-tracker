import axios, { AxiosResponse } from "axios";

// api using IP Geolocation
export const api = axios.create({
	baseURL: "https://geo.ipify.org/api/v2",
});

export const getIp = async (param?: string): Promise<AxiosResponse> => {
	const ipAddressRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const domainRegex =
		/^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;

	if (param?.match(emailRegex)) {
		return api.get(`country`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				email: param,
			},
		});
	}

	if (param?.match(domainRegex)) {
		return api.get(`country`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				domain: param,
			},
		});
	}

	if (param?.match(ipAddressRegex)) {
		return api.get(`country`, {
			params: {
				apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
				ipAddress: param,
			},
		});
	}

	return api.get(`country`, {
		params: {
			apiKey: process.env.REACT_APP_IP_GEOLOCATION_API_KEY,
		},
	});
};
