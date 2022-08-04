import { IIpInfo } from "../../interfaces/IIpInfo";
import { IpInfoCard } from "../IpInfoCard";
import { SearchForm } from "../SearchForm";
import { HeaderContainer, IpInfoCardContainer, Title } from "./styles";

interface HeaderProps {
	onSearch: (search: string) => Promise<void>;
	ip?: IIpInfo;
}

export function Header({ onSearch, ip }: HeaderProps) {
	return (
		<HeaderContainer>
			<Title>IP Address Tracker</Title>
			<SearchForm onSubmit={onSearch} placeholder="Search for any IP address or domain" />
			<IpInfoCardContainer>
				<IpInfoCard ip={ip} />
			</IpInfoCardContainer>
		</HeaderContainer>
	);
}
