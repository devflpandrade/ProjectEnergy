import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import Navbar from './NavBar';
import Sidebar from './SideBar';

// Corrigir ícone do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MainPage = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ city: '', plugType: '' });
  const [sidebarOpen, setSidebarOpen] = useState(false); // Controla a visibilidade da barra lateral

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const { city, plugType } = filters;
        const queryParams = new URLSearchParams();
        if (city) queryParams.append('city', city);
        if (plugType) queryParams.append('plugType', plugType);

        const response = await axios.get(`http://localhost:5000/stations?${queryParams.toString()}`);
        setStations(response.data);
      } catch (err) {
        console.error('Erro ao buscar estações:', err);
        setError('Erro ao carregar estações.');
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, [filters]);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Alterna a visibilidade da barra lateral
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} /> {/* Passa a função de alternar a sidebar */}
      <div style={{ display: 'flex' }}>
        {sidebarOpen && <Sidebar onSearch={handleSearch} />} {/* Exibe a sidebar apenas se estiver aberta */}
        <div style={{ marginLeft: sidebarOpen ? '16rem' : '0', marginTop: '4rem', height: 'calc(100vh - 4rem)', width: sidebarOpen ? 'calc(100% - 16rem)' : '100%' }}>
          <MapContainer center={[-29.91070208644713, -51.18434709963495]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {stations.map((station) => {
              const { latitude, longitude } = station.location;
              if (latitude && longitude) {
                return (
                  <Marker key={station._id} position={[latitude, longitude]}>
                    <Popup>
                      <div>
                        <h3>{station.name}</h3>
                        <p>{station.location.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                );
              }
              return null;
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
