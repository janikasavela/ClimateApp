import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import { getChart } from '../../services/authService';

export default function Visualization5() {
  const [sector, setSector] = useState([]);
  
  const callingTheServer = async () => {
  
    setSector((await getChart("v5sector")).data);

  };
     
  useEffect(() => {
    callingTheServer();
}, [])

const data = {
  labels: sector.map((d) => d.sector),
  datasets: [
    {
      label: "GHG Emissions by Sector",
      data: sector.map(d => d.share_of),
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
      </div>
    <div className="chart-infoo">
        <p>Stacked line graph of country-specific co2 emissions over time. Values in million tonnes of CO2 per year. From the graph, the user can select the countries whose data is displayed.</p>
        <p><a className="datalink" href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description</a></p>
        <p><a className="datalink" href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Data Source</a></p>
        </div>
  </React.Fragment>
);
};
