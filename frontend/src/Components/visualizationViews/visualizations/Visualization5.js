import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import { getChart } from '../../services/authService';

export default function Visualization5(props) {
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

  const generateRandomColors = (num) => {
    let colors = [];
    for (let i = 0; i < num; i++) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      colors.push(`rgb(${r},${g},${b})`);
    }
    return colors;
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
      backgroundColor: generateRandomColors(activeData.length),
      hoverBackgroundColor: generateRandomColors(activeData.length)
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "CO2 emissions by sectors",
      font: {
        size: 20
      }
    },
  },
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
      <div className='chart-infoo1'>
      <button className='pieButton' onClick={handleDataClick3}>Sector</button>
      <button className='pieButton' onClick={handleDataClick}>Sub-sector</button>
      <button className='pieButton' onClick={handleDataClick2}>Sub-sector (further breakdown)</button>
      </div>

      { props.desc ? <p className='propsi'>{props.desc}</p> : <p></p> }
      
    <div className="chart-infoo">
        <p>Pie chart of co2 emissions by industry. By pressing the buttons, you can see the industry's more detailed emission data. </p>
        <p><a className="datalink" href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector">Description</a></p>
        <p><a className="datalink" href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">Data Source</a></p>
        </div>
  </React.Fragment>
);
};
