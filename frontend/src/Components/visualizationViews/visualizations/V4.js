import React, {useEffect, useState} from 'react';
import { Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { getChart } from '../../services/authService';
import "chartjs-adapter-luxon";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

export default function Visualization2() {

    const [global, setGlobal] = useState([]);
    const [carbon, setCarbon] = useState([]);


    const callingTheServer = async () => {
        setGlobal((await getChart("v3global")).data);
        setCarbon((await getChart("v3carbon")).data);
        console.log(carbon);
    };

    useEffect(() => {
        callingTheServer();
    }, [])

    const data = {
      // labels: global.map((data) => data.years_ago),
      datasets: [
        {
          label: "Global data",
          data: global.map((item) => ({ x: item.years_ago, y: item.temperature})),
          borderColor: "rgb(50, 80, 200)",
          backgroundColor: "rgb(50, 80, 200)",
          borderWidth: 1,
          pointRadius: 0,
        },
        {
          label: "Carbon data",
          data: carbon.map((item) => ({ x: item.years_ago, y: item.co2})),
          borderColor: "rgb(200, 80, 50)",
          backgroundColor: "rgb(200, 80, 50)",
          borderWidth: 1,
          pointRadius: 0,
          
        }
      ]
  }
  
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: '(Thousands of) Years Ago',
        },
      },
      y: {
        type: 'linear',
        max: 4,
        min: -8,
        title: {
          display: true,
          text: 'Temperature Change (°C)',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        max: 500,
        min: 0,
        title: {
          display: true,
          text: 'CO2 ppm',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Global Temperature Change vs CO2 ppm',
      },
      legend: {
        position: 'bottom',
      },
    },
  };
  


    return (
        <React.Fragment>
        <div className='chart-info'>
           <Line data={data} options={options}/>
        </div>

        <div className="chart-infoo">
   
        </div>
        </React.Fragment>
    );

};