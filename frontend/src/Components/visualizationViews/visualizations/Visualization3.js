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

    const [annual, setAnnual] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [showAnnual, setShowAnnual] = useState(true);
    const [reconstruction, setReconstruction] = useState([]);

    const callingTheServer = async () => {
        setAnnual((await getChart("v1Annual")).data);
        setMonthly((await getChart("v1Monthly")).data);
        setReconstruction((await getChart("R")).data);
    };

    useEffect(() => {
        callingTheServer();
    }, [])

    const data = {
        datasets: [
            {
                label: "Global anomalies",
                data: showAnnual ? annual : monthly,
                borderColor: "#cd5c5c",
                backgroundColor: "#cd5c5c",
                borderWidth: 1,
                parsing: {
                  xAxisKey: "year",
                  yAxisKey: "global_anomaly",
                },
                pointRadius: 1,
              },
          {
            label: "North anomalies",
            data: showAnnual ? annual : monthly,
            borderColor: "#4169e1",
            backgroundColor: "#4169e1",
            borderWidth: 1,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "northern_anomaly",
            },
            pointRadius: 1,
          },
          {
            label: "South anomalies",
            data: showAnnual ? annual : monthly,
            borderColor: "#663399",
            backgroundColor: "#663399",
            borderWidth: 1,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "southern_anomaly",
            },
            pointRadius: 1,
          },
          // {
          //   label: "Reconstruction",
          //   data: reconstruction,
          //   hidden: true,
          //   borderColor: "#7fffd4",
          //   backgroundColor: "#7fffd4",
          //   parsing: {
          //     xAxisKey: "year",
          //     yAxisKey: "T",
          //   },
          //   pointRadius: 1,
          // }

        ]
      }
    
      const options =
      {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Temperature anomalies " + (showAnnual ? "annually" : "monthly"),
            font: {
              size: 20
            }
          },
        } ,     
        // scales: {
        //   x: {
        //     type: "linear",
        //     // max: 2022,
        //   },
        //   y: {
        //     type: "linear",
        //   },
          
        // },
    
      }
    
    return (
        <React.Fragment>
        <div className='chart-info'>
           <Line data={data} options={options}/>
            <div>
           <input type="radio" name="select" onChange={(e) => setShowAnnual(true)} id="true" />
           <label className="show"htmlFor="true">Show Annually</label></div>

           <input type="radio" name="select" onChange={(e) => setShowAnnual(false)} id="false"/>
           <label className="show" htmlFor="false">Show Monthly</label>
        </div>

        <div className="chart-infoo">
        <p>In the diagram above, annual temperature deviations from the period 1850-2022.</p>
        <p>Source: <a className="datalink" href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">hadCRUT5 data</a></p>
        </div>
        </React.Fragment>
    );

};