import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

function Dashboard() {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Russia");
  const [selectedLabel, setSelectedLabel] = useState("destroyed");
  const [selectedVehicle, setSelectedVehicle] = useState("All Types");

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter(
    (item) =>
      item.country === selectedCountry &&
      item.equipment_type === selectedVehicle
  );

  const labels = filteredData.map((item) => item.date_recorded);
  const selectedValues = filteredData.map((item) =>
    parseInt(item[selectedLabel])
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${
          selectedLabel.charAt(0).toUpperCase() + selectedLabel.slice(1)
        } Equipment (${selectedVehicle})`,
        data: selectedValues,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const uniqueVehicleTypes = [
    ...new Set(data.map((item) => item.equipment_type)),
  ];

  return (
    <div className="dashboard">
      <h1>War Losses Dashboard</h1>
      <div className="controls">
        <div className="button-group">
          <button onClick={() => setSelectedCountry("Russia")}>Russia</button>
          <button onClick={() => setSelectedCountry("Ukraine")}>Ukraine</button>
        </div>
        <div className="dropdown-group">
          <label htmlFor="labelSelect">Select Label:</label>
          <select
            id="labelSelect"
            value={selectedLabel}
            onChange={(e) => setSelectedLabel(e.target.value)}
          >
            <option value="destroyed">Destroyed</option>
            <option value="abandoned">Abandoned</option>
            <option value="captured">Captured</option>
            <option value="damaged">Damaged</option>
          </select>
        </div>
        <div className="dropdown-group">
          <label htmlFor="vehicleSelect">Select Vehicle Type:</label>
          <select
            id="vehicleSelect"
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            {uniqueVehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;
