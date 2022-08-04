import styled from "styled-components";

export const Form = styled.form`
	width: 100%;
	max-width: 35rem;
`;

export const Input = styled.input`
	width: calc(100% - 3rem);
	height: 3rem;
	padding: 1rem;

	border: none;
	border-radius: 0.75rem 0 0 0.75rem;

	font-size: 18px;
	color: var(--very-dark-gray);

	&:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	width: 3rem;
	height: 3rem;

	border: none;
	border-radius: 0 0.75rem 0.75rem 0;

	cursor: pointer;
	font-size: 18px;
	font-weight: 700;
	color: white;
	background-color: #000000;

	&:hover,
	&:focus,
	&:active {
		filter: brightness(0.5);
	}
`;

export const ErrorMsg = styled.h1`
	color: white;
	font-weight: 400;
	font-size: 1rem;
`;
