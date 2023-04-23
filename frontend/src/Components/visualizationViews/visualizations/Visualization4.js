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
import Select from 'react-select'


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

export default function Visualization4() {

    const [emissions, setEmissions] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(['USA', 'China', 'India']);

    const callingTheServer = async () => {
     setEmissions((await getChart("v4")).data);
     const moi = countryOptions();
     console.log(moi);
    };

    const countryOptions = () => {
      if (!emissions || emissions.length === 0) {
        return [];
      }
      return Object.keys(emissions[0]).filter((key) => key !== "year").map((country) => ({
        label: country,
        value: country,
      }));
    };

    useEffect(() => {
        callingTheServer();
    }, [])

    const data = {
      labels: emissions.map((d) => d.year),
      datasets: selectedCountries.map((country) => ({
        label: country,
        data: emissions.map((d) => d[country]),
        fill: false,
        borderColor: '#' + ((1<<24)*Math.random() | 0).toString(16),
        borderWidth: 1,
      })),
    };


    const handleCountryChange = (event) => {
      const selectedValues = event.map(option => option.value);
      setSelectedCountries(selectedValues);
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Select the countries you want to view above",
          font: {
            size: 16
          }
        },
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        }],
        yAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'CO2 Emissions (metric tons per capita)',
          },
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    };


return (
  <React.Fragment>
    <div className='chart-info22'>
    <div>
      <h4 className='label'>CO2 emissions by country</h4>
      <Select
  options={countryOptions()}
  isMulti
  onChange={handleCountryChange}
  defaultValue={[]}
/>
    </div>
    <Line data={data} options={options} />
    </div>
  </React.Fragment>
);


};