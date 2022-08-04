import { useCallback, useEffect, useState } from "react";
import { IpInfoCard, Map, SearchForm } from "./components";
import { IIpInfo } from "./interfaces/IIpInfo";
import { getIp } from "./services/api";
import { Header, IpInfoCardContainer, MapSkeleton, Title } from "./styles/styles";

function App() {
	const [ipInfo, setIpInfo] = useState<IIpInfo>({} as IIpInfo);
	const [isLoading, setLoading] = useState(true);

	const handleIpSearch = useCallback(async (ipAddress?: string) => {
		try {
			setLoading(true);

			const { data } = await getIp(ipAddress);

			console.log(data);

			const ip: IIpInfo = {
				address: data.ip,
				isp: data.isp,
				timezone: data.location.timezone,
				country: data.location.country,
				region: data.location.region,
				city: data.location.city,
				lat: data.location.lat,
				lng: data.location.lng,
			};

			setIpInfo(ip);
		} catch (error) {
			setIpInfo({} as IIpInfo);
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		handleIpSearch();
	}, [handleIpSearch]);

	return (
		<>
			<Header>
				<Title>IP Address Tracker</Title>

				<SearchForm
					onSubmit={handleIpSearch}
					placeholder="Search for any IP address or domain"
				/>

				<IpInfoCardContainer>
					<IpInfoCard ip={ipInfo} isLoading={isLoading} />
				</IpInfoCardContainer>
			</Header>

			{isLoading ? (
				<MapSkeleton />
			) : (
				<Map position={{ lat: ipInfo?.lat, lng: ipInfo?.lng }} />
			)}
		</>
	);
}

export default App;
