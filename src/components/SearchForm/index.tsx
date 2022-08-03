import { FormEvent, useState } from "react";
import { Button, Form, Input } from "./styles";

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
			console.log("Search failed!");
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
