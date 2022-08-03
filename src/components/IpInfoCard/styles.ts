import styled from "styled-components";

export const InfoContainer = styled.div`
	max-width: 20rem;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 0.25rem;

	@media screen and (min-width: 850px) {
		align-items: start;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 1.5rem;

	width: 100%;
	min-height: 12rem;
	padding: 2rem;

	border: none;
	border-radius: 0.75rem;
	background-color: white;

	@media screen and (min-width: 850px) {
		flex-direction: row;
		gap: 1.5rem;
		min-height: 8rem;
	}
`;

export const Identifier = styled.p`
	font-size: 0.75rem;
	font-weight: 500;
	color: var(--dark-gray);
	text-transform: uppercase;
`;

export const Information = styled.p`
	font-size: 1.25rem;
	font-weight: 500;
	color: var(--very-dark-gray);
`;
