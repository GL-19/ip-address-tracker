import { IIpInfo } from "../../interfaces/IIpInfo";
import { Identifier, InfoContainer, Information, CardContainer } from "./styles";

interface IpInfoCardProps {
	ip?: IIpInfo;
}

export function IpInfoCard({ ip }: IpInfoCardProps) {
	return (
		<CardContainer>
			<InfoContainer>
				<Identifier>Ip Address</Identifier>
				<Information>{ip?.address ? ip.address : "192.212.174.101"}</Information>
			</InfoContainer>

			<InfoContainer>
				<Identifier>Location</Identifier>
				<Information>
					{ip?.country && ip?.region && ip?.city
						? `${ip.city}-${ip.region}-${ip.country}`
						: "Brooklyn, NY 10001"}
				</Information>
			</InfoContainer>

			<InfoContainer>
				<Identifier>Timezone</Identifier>
				<Information>{ip?.timezone ? `UTC ${ip.timezone}` : "UTC 05:00"}</Information>
			</InfoContainer>

			<InfoContainer>
				<Identifier>Isp</Identifier>
				<Information>{ip?.isp ? ip.isp : "SpaceX - Starlink"}</Information>
			</InfoContainer>
		</CardContainer>
	);
}
