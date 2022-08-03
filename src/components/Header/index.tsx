import { InfosCard } from "../InfosCard";
import { SearchIpForm } from "../SearchIpForm";

export function Header() {
	return (
		<header>
			<h1>IP Address Tracker</h1>
			<SearchIpForm onSubmit={async (name) => console.log(name)} />
			<InfosCard />
		</header>
	);
}
