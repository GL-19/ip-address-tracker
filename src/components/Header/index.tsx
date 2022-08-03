import styled from "styled-components";

import { InfosCard } from "../InfosCard";
import { SearchIpForm } from "../SearchIpForm";

import headerBackground from "../../assets/images/pattern-bg.png";

export function Header() {
	return (
		<HeaderContainer>
			<h1>IP Address Tracker</h1>
			<SearchIpForm onSubmit={async (name) => console.log(name)} />
			<InfosCard />
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	width: 100%;
	height: 14rem;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-image: url(${headerBackground});
`;
