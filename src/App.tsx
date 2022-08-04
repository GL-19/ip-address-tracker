import { useCallback, useEffect, useState } from "react";
import { Header, Map } from "./components";
import { IIpInfo } from "./interfaces/IIpInfo";
import { getIp } from "./services/api";

function App() {
	const [ipInfo, setIpInfo] = useState<IIpInfo>({} as IIpInfo);

	const handleIpSearch = useCallback(async (ipAddress?: string) => {
		try {
			const { data } = await getIp(ipAddress);

			console.log(data);

			const ip: IIpInfo = {
				address: data.ip,
				timezone: data.location.timezone,
				location: `${data.location.country}-${data.location.region}`,
				isp: data.isp,
			};

			setIpInfo(ip);
		} catch (error) {
			console.log(error);
		}
	}, []);

	/* 	useEffect(() => {
		handleIpSearch();
	}, [handleIpSearch]); */

	return (
		<>
			<Header onSearch={handleIpSearch} ip={ipInfo} />
			<Map />
		</>
	);
}

export default App;
