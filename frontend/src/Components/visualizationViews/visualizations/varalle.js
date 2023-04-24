import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getChart } from '../../services/authService';

export default function Visualization5() {
  const [selectedData, setSelectedData] = useState([]);
  
  const callingTheServer = async () => {
    const sectorData = await getChart('v5sector');
    const subsectorData = await getChart('v5subsector');
    const subsectorFurtherData = await getChart('v5subsectorF');
    
    const chartData = {
      sector: sectorData.data,
      subsector: subsectorData.data,
      subsectorFurther: subsectorFurtherData.data,
    };
    
    setSelectedData(chartData.sector);
    return chartData;
  };
     
  useEffect(() => {
    callingTheServer().then(setChartData);
  }, []);

  const [chartData, setChartData] = useState({
    sector: [],
    subsector: [],
    subsectorFurther: [],
  });

  
  const handlePieClick = (elems) => {
    if (!elems || elems.length === 0 || !elems[0]) return;
    
    const dataIndex = elems[0]._index;
    const dataLabel = elems[0]._chart.config.data.labels[dataIndex];
      
    if (selectedData === chartData.sector) {
      setSelectedData(
        chartData.subsector.filter(d => d.sector === dataLabel)
      );
    } else if (selectedData === chartData.subsector) {
      setSelectedData(
        chartData.subsectorFurther.filter(d => d.subsector === dataLabel)
      );
    } else {
      setSelectedData(chartData.sector);
    }
  };

  const data = {
    labels: selectedData.map((d) => d.sector || d.subsector),
    datasets: [
      {
        data: selectedData.map((d) => d.share_of),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8BC34A',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8BC34A',
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'CO2 Emissions by Sector',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[0].data[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
    onClick: handlePieClick,
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
