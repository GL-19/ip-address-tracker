import styled from "styled-components";
import headerBackground from "../assets/images/pattern-bg.png";

export const IpInfoCardContainer = styled.div`
	width: 100%;
	position: relative;
	top: 1.5rem;
	z-index: 1;

	@media screen and (min-width: 850px) {
		top: 2.5rem;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 17.5rem;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-image: url(${headerBackground});

	@media screen and (min-width: 500px) {
		height: 15rem;
		padding: 2rem 4rem;
	}

	@media screen and (min-width: 850px) {
		height: 15rem;
		padding: 2rem 8rem;
	}
`;

export const Title = styled.h1`
	color: white;
	font-weight: 500;
	margin-bottom: 1.5rem;
`;

export const ErrorMsg = styled.h1`
	color: white;
	font-weight: 400;
	font-size: 1rem;
`;

export const MapSkeleton = styled.div`
	height: 100%;
	width: 100%;
	background: #eee;
	background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
	border-radius: 5px;
	background-size: 200% 100%;
	animation: 1.5s shine linear infinite;
`;

export const Main = styled.main`
	width: 100%;
	height: 100vh;
`;
