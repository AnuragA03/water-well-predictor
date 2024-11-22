import "./Insights.style.css";
import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export const Insights = () => {
  const [groundwaterChartData, setGroundwaterChartData] = useState({});
  const [waterQualityChartData, setWaterQualityChartData] = useState({});
  const [waterConductivityChartData, setWaterConductivityChartData] = useState(
    {}
  );

  useEffect(() => {
    const groundwaterData = {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
      datasets: [
        {
          label: "Groundwater Level (meters)",
          data: [5.2, 5.1, 5.0, 4.9, 5.3, 5.5, 5.6],
          fill: false,
          borderColor: "rgba(75, 192, 192, 0.8)",
          tension: 0.4,
        },
      ],
    };

    const waterQualityData = {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
      datasets: [
        {
          label: "pH Level",
          data: [6.8, 7.0, 7.54, 8.3, 7.85, 7.6, 8.04],
          fill: false,
          borderColor: "rgba(255, 99, 132, 0.8)",
          tension: 0.4,
        },
      ],
    };
    const waterConductivityData = {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
      datasets: [
        {
          label: "Water Conductivity (EC μS/cm at 5°)",
          data: [150, 189, 284, 335, 289, 509, 592],
          fill: false,
          borderColor: "rgba(75, 192, 192, 0.8)",
          tension: 0.4,
        },
      ],
    };
    setWaterConductivityChartData(waterConductivityData);
    setGroundwaterChartData(groundwaterData);
    setWaterQualityChartData(waterQualityData);
  }, []);

  return (
    <div className="main-content">
      <h1 className="heading-md pl-5 pt-5">Data Insights</h1>
      <p className="bg-[var(--container-color)] p-5 rounded">
        Insights related to water can encompass a wide range of topics, from
        environmental and conservation issues to data on water quality,
        availability, and usage. These insights can help researchers,
        policymakers, environmentalists, and organizations make informed
        decisions and take appropriate actions. These data insights provide
        valuable information for addressing water-related challenges, making
        informed policies, and implementing sustainable water management
        practices. They help stakeholders understand the current state of water
        resources, predict future trends, and develop strategies to ensure the
        responsible and efficient use of this critical natural resource.
      </p>
      <h2 className="heading">
        Visual representation of Trends of Ground Water Level Overtime and Water
        Quality Distribution across different regions of The Northern and Middle
        Part of Andaman and Nicobar Island
      </h2>
      <div className="insights">
        <div className="chart-card">
          <h3>Groundwater Level Over Time</h3>
          <Chart type="line" data={groundwaterChartData} />
          <p>
            Groundwater level refers to the depth at which groundwater, which is
            water stored underground in the cracks and spaces between soil,
            sand, and rocks, is found below the Earth's surface.
          </p>
        </div>

        <div className="chart-card">
          <h3>Water Quality Metrics Over Time</h3>
          <Chart type="line" data={waterQualityChartData} />
          <p>
            Water quality metrics are specific measurements or indicators used
            to assess the chemical, physical, biological, and radiological
            characteristics of water. a
          </p>
        </div>
        <div className="chart-card">
          <h3>Water Conductivity Metrics</h3>
          <Chart type="line" data={waterConductivityChartData} />
          <p>
            Water conductivity, often referred to as electrical conductivity
            (EC) or specific conductance, is a water quality metric that
            measures the ability of water to conduct an electrical current.
          </p>
        </div>
      </div>
    </div>
  );
};
