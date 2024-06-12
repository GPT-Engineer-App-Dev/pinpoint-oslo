import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import BuildingInfoCard from "../components/BuildingInfoCard";

// Dummy data for buildings
const buildings = [
  { id: 1, name: "Building 1", position: [59.91, 10.75], sensors: { temperature: 22, humidity: 45, co2: 400 } },
  { id: 2, name: "Building 2", position: [59.92, 10.76], sensors: { temperature: 21, humidity: 50, co2: 420 } },
  { id: 3, name: "Building 3", position: [59.93, 10.77], sensors: { temperature: 23, humidity: 55, co2: 410 } },
  { id: 4, name: "Building 4", position: [59.94, 10.78], sensors: { temperature: 20, humidity: 60, co2: 430 } },
  { id: 5, name: "Building 5", position: [59.95, 10.79], sensors: { temperature: 19, humidity: 65, co2: 440 } },
  { id: 6, name: "Building 6", position: [59.96, 10.80], sensors: { temperature: 18, humidity: 70, co2: 450 } },
  { id: 7, name: "Building 7", position: [59.97, 10.81], sensors: { temperature: 17, humidity: 75, co2: 460 } },
  { id: 8, name: "Building 8", position: [59.98, 10.82], sensors: { temperature: 16, humidity: 80, co2: 470 } },
  { id: 9, name: "Building 9", position: [59.99, 10.83], sensors: { temperature: 15, humidity: 85, co2: 480 } },
  { id: 10, name: "Building 10", position: [60.00, 10.84], sensors: { temperature: 14, humidity: 90, co2: 490 } },
];

const pinIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
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

export default Index;