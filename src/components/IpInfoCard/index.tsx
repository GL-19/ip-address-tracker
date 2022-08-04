import { IIpInfo } from "../../interfaces/IIpInfo";
import {
	Identifier,
	InfoContainer,
	Information,
	CardContainer,
	Skeleton,
} from "./styles";

interface IpInfoCardProps {
	ip?: IIpInfo;
	isLoading: boolean;
}

export function IpInfoCard({ ip, isLoading = false }: IpInfoCardProps) {
	return (
		<CardContainer>
			<InfoContainer>
				<Identifier>Ip Address</Identifier>
				{isLoading ? <Skeleton /> : <Information>{ip?.address}</Information>}
			</InfoContainer>

			<InfoContainer>
				<Identifier>Location</Identifier>
				{isLoading ? (
					<Skeleton />
				) : (
					<Information>{`${ip?.city}-${ip?.region}-${ip?.country}`}</Information>
				)}
			</InfoContainer>

			<InfoContainer>
				<Identifier>Timezone</Identifier>
				{isLoading ? <Skeleton /> : <Information>{`UTC ${ip?.timezone}`}</Information>}
			</InfoContainer>

			<InfoContainer>
				<Identifier>Isp</Identifier>
				{isLoading ? <Skeleton /> : <Information>{ip?.isp}</Information>}
			</InfoContainer>
		</CardContainer>
	);
}
