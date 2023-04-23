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


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

export default function Visualization3() {

    const [global, setGlobal] = useState([]);
    const [carbon, setCarbon] = useState([]);
    const [events, setEvents] = useState([]);


    const callingTheServer = async () => {
        setGlobal((await getChart("v3global")).data);
        setCarbon((await getChart("v3carbon")).data);
        setEvents((await getChart("v3events")).data);
        console.log(events);
    };

    useEffect(() => {
        callingTheServer();
    }, [])

    const data = {
      datasets: [
        {
          label: "Global data",
          data: global.map((item) => ({ x: item.years_ago, y: item.temperature })),
          borderColor: "rgb(50, 80, 200)",
          backgroundColor: "rgb(50, 80, 200)",
          borderWidth: 1,
          pointRadius: 0,
        },
        {
          label: "Carbon data",
          data: carbon.map((item) => ({ x: item.years_ago, y: item.co2 })),
          borderColor: "#800080",
          backgroundColor: "#800080",
          borderWidth: 1,
          pointRadius: 0,
          yAxisID: 'y1',
        },
        {
          label: "Events",
          data: events.map((item) => ({ x: item.years_ago, y: 0 })),
          backgroundColor: "#FFA500",
          pointRadius: 13,
          pointStyle: 'rectRot',
          pointBackgroundColor: '#FFA500',
          showLine: false,
          hoverRadius: 20,
          hoverBackgroundColor: 'rgba(255,165,0,0.5)',
          hoverBorderWidth: 3,
          hoverBorderColor: 'rgba(255,165,0,1)',
        },
      ]
    };
    
const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      type: "linear",
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
    tooltip: {
      callbacks: {
        title: (items) => {
          const item = items[0]; // Only show tooltip for the first item
          const yearsAgo = item.raw.x;
          const event = events.find(e => e.years_ago === yearsAgo);
          return event ? `Years ago: ${event.years_ago} 000` : '';
        },
        label: (item) => {
          const yearsAgo = item.raw.x;
          const event = events.find(e => e.years_ago === yearsAgo);
          return event ? `Event: ${event.event}` : '';
        },
      }, },
    title: {
      display: true,
      text: 'Global Temperature Change vs CO2 ppm',
      font: {
        size: 16
      }
    },
    legend: {
      position: 'bottom',
    },
  },
};





    return (
        <React.Fragment>
        <div className='chart-info2'>
           <Line data={data} options={options}/>
        </div>

        <div className="chart-infoo">
         <p>Multi-axis line graph of temperature and carbon dioxide concentrations of changes over 2 million years.
         The years in the graph mean thousands of years, for example 900 = 900,000 years ago.
         </p>
         <p>8 events of human evolution and activities.</p>
         <p><a href="http://carolynsnyder.com/publications.php" className="datalink">Evolution of global temperature Data Source</a> and  <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" className="datalink">Description</a>
        </p>
        <p><a href="https://www.southampton.ac.uk/~cpd/history.html" className="datalink">Human Evolution and Activities Data Source and Description</a></p>
        </div>
        </React.Fragment>
    );

};