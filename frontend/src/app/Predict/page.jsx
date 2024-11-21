"use client";
import React, { useState, useEffect } from "react";
import "./predict.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function Dashboard() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [areaName, setAreaName] = useState("");
  const [popupLocation, setPopupLocation] = useState({ lat: 0, lng: 0 });
  const [visible, setVisible] = useState(false);
  const [latInput, setLatInput] = useState("");
  const [lngInput, setLngInput] = useState("");
  const [wellInfo, setWellInfo] = useState(null);
  const [error, setError] = useState(null); // Added state for error handling

  const fetchWellInfo = async (lat, lng) => {
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: lng,
        }),
      });
      const data = await response.json();
      if (data.error) {
        // If the response contains an error, set the error state
        setError(data.error);
        setWellInfo(null); // Clear previous well info if there's an error
      } else {
        setWellInfo(data);
        setError(null); // Clear any existing error
      }
    } catch (error) {
      console.error("Error fetching prediction data", error);
      setError("Failed to fetch data. Please try again later.");
      setWellInfo(null); // Clear previous well info if there's an error
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=800,height=600");

    // Format the wellInfo content into HTML structure
    const wellInfoContent = `
    <div class="info">
      <p class="font-bold">Latitude: <span class="font-normal">${roundOff(
        popupLocation.lat
      )}°
      </span></p>
      <p class="font-bold">Longitude: <span class="font-normal">${roundOff(
        popupLocation.lat
      )}</span></p>
    </div>
    <div class="info">
      <p class="font-bold">Annual Replenishable Resources: <span class="font-normal">${roundOff(
        wellInfo.features.AnnualReplenishableResources
      )} m³</span></p>
      <p class="font-bold">Irrigation Draft: <span class="font-normal">${roundOff(
        wellInfo.features.IrrigationDraft
      )} m³</span></p>
    </div>
    <div class="info">
      <p class="font-bold">Net Groundwater Availability: <span class="font-normal">${roundOff(
        wellInfo.features.NetGroundwaterAvailability
      )} m³</span></p>
      <p class="font-bold">Stage of Groundwater Development: <span class="font-normal">${roundOff(
        wellInfo.features.StageOfGroundwaterDevelopment
      )} %</span></p>
    </div>
    <div class="info">
      <p class="font-bold">Total Draft: <span class="font-normal">${roundOff(
        wellInfo.features.TotalDraft
      )} m³</span></p>
    </div>
    <div class="info">
      <h3 class="font-bold">Well Suitability: 
        <span class="font-normal ${
          wellInfo.suitability === "Suitable"
            ? "bg-green-400 text-white"
            : "bg-red-400 text-white"
        } px-2 py-0.5 rounded">
          ${wellInfo.suitability}
        </span>
      </h3>
    </div>
  `;

    const content = `
    <html>
      <head>
        <title>Prediction Information</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .info { margin-bottom: 10px; }
          .font-bold { font-weight: bold; }
          .font-normal { font-weight: normal; }
          .bg-green-400 { background-color: #68D391; }
          .bg-red-400 { background-color: #FC8181; }
          .text-white { color: white; }
          .px-2 { padding-left: 8px; padding-right: 8px; }
          .py-0.5 { padding-top: 4px; padding-bottom: 4px; }
          .rounded { border-radius: 4px; }
          h3 { margin-top: 20px; }
        </style>
      </head>
      <body>
        <div id="printable-content">
          ${wellInfoContent}
        </div>
      </body>
    </html>
  `;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPosition({ lat, lng });
    setPopupLocation({ lat, lng });
    await fetchWellInfo(lat, lng);
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
      console.error("Error fetching reverse geocoding data", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);

    if (!isNaN(lat) && !isNaN(lng)) {
      setSelectedPosition({ lat, lng });
      setPopupLocation({ lat, lng });
      await fetchWellInfo(lat, lng);
      setVisible(true);
    } else {
      alert("Please enter valid latitude and longitude.");
    }
  };

  const roundOff = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleFormSubmit}
        className="form absolute top-2 left-14 z-[999] flex gap-2 p-3 rounded-md shadow-md"
      >
        <input
          type="number"
          step="any"
          placeholder="Latitude"
          value={latInput}
          onChange={(e) => setLatInput(e.target.value)}
          required
          className="px-2 border rounded-md appearance-none focus:outline-none"
        />
        <input
          type="number"
          step="any"
          placeholder="Longitude"
          value={lngInput}
          onChange={(e) => setLngInput(e.target.value)}
          required
          className="px-2 border rounded-md appearance-none focus:outline-none"
        />
        <Button type="submit" label="Search" className="p-button-sm" />
      </form>

      <div className="map-container">
        <MapContainer
          className="dashboard"
          center={[29.0588, 76.0856]}
          zoom={9}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler onClick={handleMapClick} />
          {selectedPosition && (
            <Marker position={selectedPosition}>
              <Popup>
                <div>
                  <strong>Latitude:</strong> {roundOff(selectedPosition.lat)}
                </div>
                <div>
                  <strong>Longitude:</strong> {roundOff(selectedPosition.lng)}
                </div>
                <div>
                  <strong>Area Name:</strong> {areaName || "Loading..."}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <Dialog
        header="Prediction Information"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={
          <Button
            label="Print"
            icon="pi pi-print"
            onClick={handlePrint}
            autoFocus
          />
        }
      >
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : wellInfo ? (
          <>
            <div className="info flex gap-2">
              <span className="basis-1/2">
                <strong>Latitude:</strong> {roundOff(popupLocation.lat)}°
              </span>
              <span className="basis-1/2">
                <strong>Longitude:</strong> {roundOff(popupLocation.lng)}°
              </span>
            </div>
            <div className="flex gap-2 info">
              <span className="basis-1/2">
                <p className="font-bold">
                  Annual Replenishable:{" "}
                  <span className="font-normal">
                    {roundOff(wellInfo.features.AnnualReplenishableResources)}{" "}
                    m³
                  </span>
                </p>
              </span>
              <span className="basis-1/2">
                <p className="font-bold">
                  Irrigation Draft:{" "}
                  <span className="font-normal">
                    {roundOff(wellInfo.features.IrrigationDraft)} m³
                  </span>
                </p>
              </span>
            </div>
            <div className="flex gap-2 info">
              <span className="basis-1/2">
                <p className="font-bold">
                  Net Groundwater:{" "}
                  <span className="font-normal">
                    {roundOff(wellInfo.features.NetGroundwaterAvailability)} m³
                  </span>
                </p>
              </span>
              <span className="basis-1/2">
                <p className="font-bold">
                  Groundwater Development:{" "}
                  <span className="font-normal">
                    {roundOff(wellInfo.features.StageOfGroundwaterDevelopment)}{" "}
                    %
                  </span>
                </p>
              </span>
            </div>
            <div className="flex info">
              <span className="basis-full">
                <p className="font-bold">
                  Total Draft:{" "}
                  <span className="font-normal">
                    {roundOff(wellInfo.features.TotalDraft)} m³
                  </span>
                </p>
              </span>
            </div>
            <div>
              <h3 className="font-bold">
                Suitability:{" "}
                <span
                  className={`font-normal ${
                    wellInfo.suitability === "Suitable"
                      ? "bg-green-400 text-white"
                      : "bg-red-400 text-white"
                  } px-2 py-0.5 rounded`}
                >
                  {wellInfo.suitability}
                </span>
              </h3>
            </div>
          </>
        ) : (
          <p>Loading prediction information...</p>
        )}
      </Dialog>
    </div>
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
