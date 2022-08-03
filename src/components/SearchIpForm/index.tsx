import { FormEvent, useState } from "react";
import styled from "styled-components";

interface SearchIpFormProps {
	onSubmit: (search: string) => Promise<void>;
	placeholder?: string;
}

export function SearchForm({ onSubmit, placeholder }: SearchIpFormProps) {
	const [search, setSearch] = useState("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			await onSubmit(search);
		} catch (error) {
			console.log("could no search ip");
		}
	}

	return (
		<Form action="submit" onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder={placeholder ? placeholder : "Search"}
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<Button type="submit">{">"}</Button>
		</Form>
	);
}

const Form = styled.form`
	width: 100%;
	max-width: 35rem;
`;

const Input = styled.input`
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

const Button = styled.button`
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
