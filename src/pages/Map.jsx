import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import L from "leaflet";
import BuildingInfoCard from "../components/BuildingInfoCard.jsx";
import "leaflet/dist/leaflet.css";

const buildings = [
  { id: 1, name: "Building 1", lat: 59.91, lng: 10.75, temperature: 22, humidity: 45, co2: 400 },
  { id: 2, name: "Building 2", lat: 59.92, lng: 10.76, temperature: 21, humidity: 50, co2: 420 },
  { id: 3, name: "Building 3", lat: 59.93, lng: 10.77, temperature: 23, humidity: 55, co2: 430 },
  { id: 4, name: "Building 4", lat: 59.94, lng: 10.78, temperature: 24, humidity: 60, co2: 440 },
  { id: 5, name: "Building 5", lat: 59.95, lng: 10.79, temperature: 25, humidity: 65, co2: 450 },
  { id: 6, name: "Building 6", lat: 59.96, lng: 10.80, temperature: 26, humidity: 70, co2: 460 },
  { id: 7, name: "Building 7", lat: 59.97, lng: 10.81, temperature: 27, humidity: 75, co2: 470 },
  { id: 8, name: "Building 8", lat: 59.98, lng: 10.82, temperature: 28, humidity: 80, co2: 480 },
  { id: 9, name: "Building 9", lat: 59.99, lng: 10.83, temperature: 29, humidity: 85, co2: 490 },
  { id: 10, name: "Building 10", lat: 60.00, lng: 10.84, temperature: 30, humidity: 90, co2: 500 },
];

const pinIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Map = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Box position="relative" height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={[building.lat, building.lng]}
            icon={pinIcon}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Box>
  );
};

export default Map;