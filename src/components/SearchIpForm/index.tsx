import { FormEvent, useState } from "react";
import styled from "styled-components";

interface SearchIpFormProps {
	onSubmit: (ip: string) => Promise<void>;
}

export function SearchIpForm({ onSubmit }: SearchIpFormProps) {
	const [ip, setIp] = useState("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			await onSubmit(ip);
		} catch (error) {
			console.log("could no search ip");
		}
	}

	return (
		<Form action="submit" onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="Search for any IP address or domain"
				value={ip}
				onChange={(event) => setIp(event.target.value)}
			/>
			<Button type="submit">{">"}</Button>
		</Form>
	);
}

const Form = styled.form`
	width: 100%;
	max-width: 25rem;
	margin: 0 auto;
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

	font-size: 18px;
	color: white;
	background-color: #000000;
`;
