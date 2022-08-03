import styled from "styled-components";

import { IIp } from "../../interfaces/IIp";
import { IpInfoCard } from "../IpInfoCard";
import { SearchForm } from "../SearchIpForm";

import headerBackground from "../../assets/images/pattern-bg.png";

interface HeaderProps {
	onSearch: (search: string) => Promise<void>;
	ip?: IIp;
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

const IpInfoCardContainer = styled.div`
	width: 100%;
	position: relative;
	top: 1.5rem;

	@media screen and (min-width: 850px) {
		top: 2.5rem;
	}
`;

const HeaderContainer = styled.header`
	width: 100%;
	height: 17.5rem;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-image: url(${headerBackground});

	@media screen and (min-width: 650px) {
		height: 15rem;
		padding: 2rem 6rem;
	}

	@media screen and (min-width: 850px) {
		height: 15rem;
		padding: 2rem 8rem;
	}
`;

const Title = styled.h1`
	color: white;
	font-weight: 500;
	margin-bottom: 1.5rem;
`;
