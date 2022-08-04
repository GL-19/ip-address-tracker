import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet";

interface MapProps {
	position: {
		lat: number;
		lng: number;
	};
}

export function Map({ position }: MapProps) {
	return (
		<>
			{position.lat && position.lng && (
				<MapContainer
					center={[position.lat, position.lng]}
					zoom={15}
					zoomControl={false}
					scrollWheelZoom={false}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<ZoomControl position="bottomright" />
					<Marker position={[position.lat, position.lng]} />
				</MapContainer>
			)}
		</>
	);
}
