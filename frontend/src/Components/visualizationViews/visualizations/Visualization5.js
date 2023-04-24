import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import { getChart } from '../../services/authService';

export default function Visualization5() {
  const [sector, setSector] = useState([]);
  const [subsector, setSubsector] = useState([]);
  const [subsectorF, setSubsectorF] = useState([]);
  const [activeData, setActiveData] = useState([]);
  
  const callingTheServer = async () => {
  
    setSector((await getChart("v5sector")).data);
    setSubsector((await getChart("v5subsector")).data);
    setSubsectorF((await getChart("v5subsectorF")).data);
    setActiveData((await getChart("v5sector")).data);
  };
     
  useEffect(() => {
    callingTheServer();
}, [])

const handleDataClick = () => {
  setActiveData(subsector);
};

const handleDataClick2 = () => {
  setActiveData(subsectorF);
};

const handleDataClick3 = () => {
  setActiveData(sector);
};

const data = {
  labels: activeData.map((d) => d.sector),
  datasets: [
    {
      label: "GHG Emissions by Sector",
      data: activeData.map(d => d.share_of),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "GHG Emissions by Sector"
  },
  legend: {
    position: "right"
  }
};

  return (
    <React.Fragment>
      <div className='chart-info2'>
      <Pie data={data} options={options} />
      <button onClick={handleDataClick3}>Switch to Sector Data</button>
      <button onClick={handleDataClick}>Switch to Subsector Data</button>
      <button onClick={handleDataClick2}>Switch to SubsectorF Data</button>
      </div>
      
    <div className="chart-infoo">
        <p>Stacked line graph of country-specific co2 emissions over time. Values in million tonnes of CO2 per year. From the graph, the user can select the countries whose data is displayed.</p>
        <p><a className="datalink" href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description</a></p>
        <p><a className="datalink" href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Data Source</a></p>
        </div>
  </React.Fragment>
);
};
