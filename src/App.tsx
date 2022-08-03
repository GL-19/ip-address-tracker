import { Header, Map } from "./components";

function App() {
	async function handleIpSearch(ip: string) {
		console.log(ip);
	}

	return (
		<>
			<Header onSearch={handleIpSearch} />
			<Map />
		</>
	);
}

export default App;
