import { InfosCard } from "../InfosCard";
import { Input } from "../Input";

export function Header() {
	return (
		<header>
			<h1>IP Address Tracker</h1>
			<Input type="text" placeholder="Search for any IP address or domain" />
			<InfosCard />
		</header>
	);
}
