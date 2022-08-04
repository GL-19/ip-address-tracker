import { useCallback, useEffect, useState } from "react";
import { IpInfoCard, Map, SearchForm } from "./components";
import { IIpInfo } from "./interfaces/IIpInfo";
import { getIp } from "./services/api";
import {
	ErrorMsg,
	Header,
	IpInfoCardContainer,
	Main,
	MapSkeleton,
	Title,
} from "./styles/styles";

function App() {
	const [ipInfo, setIpInfo] = useState<IIpInfo>({} as IIpInfo);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);

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
			setError(false);
		} catch (error) {
			setError(true);
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

				{isError && <ErrorMsg>An error occurred while searching</ErrorMsg>}

				<IpInfoCardContainer>
					<IpInfoCard ip={ipInfo} isLoading={isLoading || isError} />
				</IpInfoCardContainer>
			</Header>

			<Main>
				{isError || isLoading ? (
					<MapSkeleton />
				) : (
					<Map position={{ lat: ipInfo?.lat, lng: ipInfo?.lng }} />
				)}
			</Main>
		</>
	);
}

export default App;
