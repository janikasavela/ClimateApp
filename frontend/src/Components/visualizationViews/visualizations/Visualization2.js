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

    const [annual, setAnnual] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [ice1, setIce1] = useState([]);
    const [ice2, setIce2] = useState([]);
    const [ice3, setIce3] = useState([]);

    const callingTheServer = async () => {
        setAnnual((await getChart("v2annual")).data);
        setMonthly((await getChart("v2monthly")).data);
        setIce1((await getChart("v2ice1")).data);
        setIce2((await getChart("v2ice2")).data);
        setIce3((await getChart("v2ice3")).data);
        console.log(ice1);
    };

    useEffect(() => {
        callingTheServer();
    }, [])

    const data = {
      datasets: [
        {
          label: "CO2 Annual",
          data: annual,
          borderColor: "#663399",
          backgroundColor: "#663399",
          borderWidth: 1,
          parsing: {
            xAxisKey: "year",
            yAxisKey: "mean",
          },
          pointRadius: 2,
        },
        {
          label: "CO2 Monthly",
          data: monthly,
          borderColor: "#4169e1",
          backgroundColor: "#4169e1",
          pointBorderColor: 'transparent',
          pointBorderWidth: 0,
          tension: 0.5,
          borderWidth: 0.5,
          parsing: {
            xAxisKey: "year",
            yAxisKey: "average",
          },
        },
        {
          label: "Ice core 1",
          data: ice1,
          borderColor: "#7fffd4",
          backgroundColor: "#7fffd4",
          borderWidth: 1,
          hidden: true,
          showLine: true,
          parsing: {
              xAxisKey: "air_age",
              yAxisKey: "co2"
          },
          pointRadius: 2
        },
        {
          label: "Ice core 2",
          data: ice2,
          borderColor: "#008b8b",
          backgroundColor: "#008b8b",
          borderWidth: 1,
          hidden: true,
          showLine: true,
          parsing: {
              xAxisKey: "air_age",
              yAxisKey: "co2"
          },
          pointRadius: 2
        },
        {
          label: "ice core 3",
          data: ice3,
          borderColor: "#8b008b",
          backgroundColor: "#8b008b",
          borderWidth: 1,
          hidden: true,
          showLine: true,
          parsing: {
            xAxisKey: "air_age",
              yAxisKey: "co2"
          },
          pointRadius: 2
        },
      ]
    }
  
    const options =
    {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958",
          font: {
            size: 16
          }
        },
      },
      scales: {
        x: {
          type: "linear",
          max: 2021,
        },
        y: {
          type: "linear",
        },
        
      },
    }
  
    
    return (
        <React.Fragment>
        <div className='chart-info2'>
           <Line data={data} options={options}/>
        </div>

        <div className="chart-infoo">
        <p>Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958.</p>
        <p>Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements.</p>
        <p><a href="https://gml.noaa.gov/ccgg/trends/data.html" className="datalink">Mauna Loa measurements Data Source</a> and  <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" className="datalink">Description</a>
        </p>
        <p><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" className="datalink">Antarctic Ice Core records Data Source</a> and  <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" className="datalink">Description</a>
        </p>
        </div>
        </React.Fragment>
    );

};