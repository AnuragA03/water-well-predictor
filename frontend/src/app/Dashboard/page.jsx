"use client";
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function Dashboard() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [areaName, setAreaName] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupLocation, setPopupLocation] = useState({ lat: 0, lng: 0 });
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button label="Reload" icon="pi pi-spin pi-spinner" onClick={() => setWellInfo(generateRandomValues())} className="p-button-text" />
      <Button label="Proceed" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );


  const generateRandomValues = () => {
    const wellSuitability = Math.random() < 0.5 ? 'Yes' : 'No';
    const waterBearZoneDepth = Math.floor(Math.random() * 50 + 1); // Generates a random number between 1 and 50
    const drillingTechniques = ['Percussion Drilling', 'DTH Drilling ', 'Rotary Drilling', 'Desert soil'];
    const soilType = ['Alluvial Soil', 'Black Cotton Soil', 'Red and yellow soil']
    const randomSoilType = soilType[Math.floor(Math.random() * soilType.length)];
    const randomDrillingTechnique = drillingTechniques[Math.floor(Math.random() * drillingTechniques.length)];
    const waterQuality = ['Good', 'Average', 'Poor'];
    const randomWaterQuality = waterQuality[Math.floor(Math.random() * waterQuality.length)];

    return {
      wellSuitability,
      waterBearZoneDepth,
      drillingTechniques: randomDrillingTechnique,
      waterQuality: randomWaterQuality,
      soilType: randomSoilType
    };
  };

  const [wellInfo, setWellInfo] = useState(generateRandomValues());

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPosition({ lat, lng });
    setPopupLocation({ lat, lng });
    setWellInfo(generateRandomValues());
    setVisible(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      if (data.display_name) {
        setAreaName(data.display_name);
      }
    } catch (error) {
      console.error('Error fetching reverse geocoding data', error);
    }
  };

  return (
    <>
      <div className="map-container">
        <MapContainer className="dashboard" center={[20.59, 78.96]} zoom={5} style={{ height: '600px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler onClick={handleMapClick} />
          {selectedPosition && (
            <Marker position={selectedPosition}>
              <Popup>
                <div>
                  <strong>Latitude:</strong> {selectedPosition.lat.toFixed(6)}
                </div>
                <div>
                  <strong>Longitude:</strong> {selectedPosition.lng.toFixed(6)}
                </div>
                <div>
                  <strong>Area Name:</strong> {areaName || 'Loading...'}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      {/* adding breaking for positioning */}
      <Dialog header="Prediction Information" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
        <div className='info flex gap-2'>
          <span className='basis-1/2'>
            <strong>Latitude :</strong> {popupLocation.lat.toFixed(6)}
          </span>
          <span className="basis-1/2">
            <strong>Longitude :</strong> {popupLocation.lng.toFixed(6)}
          </span>
        </div>
        <div className={wellInfo.wellSuitability === 'No' ? 'hidden' : ''}>
          <div className="flex gap-2 info">
            <span className='basis-1/2'>
              <p className='font-bold'>Well Suitability: <span className="bg-purple-400 px-2 py-0.5 rounded text-white">{wellInfo.wellSuitability}</span></p>
            </span>
            <span className='basis-1/2'>
              <p className='font-bold'>Water Bear Zone Depth: <span className='font-normal'>{wellInfo.waterBearZoneDepth} meters</span></p>
            </span>
          </div>
          <div className="flex gap-2 info">
            <span className='basis-1/2'>
              <p className='font-bold'>Drilling Techniques: <span className="font-normal">{wellInfo.drillingTechniques}</span></p>
            </span>
            <span className='basis-1/2'>
              <p className='font-bold'>Soil Type: <span className='font-normal'>{wellInfo.soilType}</span></p>
            </span>
          </div>
          <div className="flex info">
            <span className='basis-full'>
              <p className='font-bold'>Water Quality: <span className="font-normal">{wellInfo.waterQuality}</span></p>
            </span>
          </div>
        </div>
        <div className={wellInfo.wellSuitability === 'Yes' ? 'hidden' : 'py-5'}>
          <h2 className='heading-sm font-bold'>Well Suitability: <span className="bg-purple-400 px-2 py-0.5 rounded text-white">{wellInfo.wellSuitability}</span></h2>
        </div>
      </Dialog>
    </>
  );
}

function MapClickHandler({ onClick }) {
  const map = useMapEvents({
    click(e) {
      onClick(e);
    },
  });

  return null;
}
