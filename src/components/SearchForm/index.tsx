import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, ErrorMsg, Form, Input } from "./styles";
import { domainRegex, emailRegex, ipAddressRegex } from "../../utils/regexes";

interface SearchFormProps {
	onSubmit: (search: string) => Promise<void>;
}

interface SearchFormInputs {
	search: string;
}

const SearchFormSchema = yup
	.object({
		search: yup
			.string()
			.test(
				"Email or domain or ip address",
				"Enter a valid email or domain or ip address",
				(value) => {
					return (
						emailRegex.test(value as string) ||
						domainRegex.test(value as string) ||
						ipAddressRegex.test(value as string)
					);
				}
			)
			.required("Email or Domain or Ip Address is required"),
	})
	.required();

export function SearchForm({ onSubmit }: SearchFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SearchFormInputs>({
		resolver: yupResolver(SearchFormSchema),
	});

	async function submitHandler(data: SearchFormInputs) {
		await onSubmit(data.search);
	}

	return (
		<>
			<Form action="submit" onSubmit={handleSubmit(submitHandler)}>
				<Input
					type="text"
					placeholder="Search for any IP address or domain or email"
					{...register("search")}
				/>
				<Button type="submit">{">"}</Button>
			</Form>
			{errors.search && <ErrorMsg>{errors.search?.message}</ErrorMsg>}
		</>
	);
}
