import React, { useState } from 'react';
import { addView } from './services/authService.js';

export default function VisualizationForm (username) {
  const [url, setUrl] = useState('');
  const [columnLayout, setColumnLayout] = useState(0);
  const [visualizations, setVisualizations] = useState([]);
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // save new visualization to database

    const vToSave = visualizations.toString();
    const user = username.username;

    console.log({
      url,
      columnLayout,
      vToSave,
      user,
      title,
      descriptions,
    });

    const body = {
      url,
      columnLayout,
      vToSave,
      user,
      title,
      desc1: descriptions.v1,
      desc2: descriptions.v2,
      desc3: descriptions.v3,
      desc4: descriptions.v4,
      desc5: descriptions.v5,
    };

    await addView(body);

    setUrl('');
    setColumnLayout(0);
    setVisualizations([]);
    setTitle('');
    setDescriptions({});
  };

  const visualizationLabels = [    { value: 'v1', label: 'Temperature anomalies' },    { value: 'v2', label: 'Atmospheric CO2' },    { value: 'v3', label: 'Global temperature' },    { value: 'v4', label: 'CO2 emissions by country' },    { value: 'v5', label: 'CO2 emissions by sectors' },  ];

  const handleVisualizationChange = (value, isChecked) => {
    setVisualizations(prevState => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter(v => v !== value);
      }
    });
  };

  const handleDescriptionChange = (value, e) => {
    setDescriptions(prevState => ({
      ...prevState,
      [value]: e.target.value,
    }));
  };

  return ( 
    <form onSubmit={handleSubmit} className='createForm'>
      <label htmlFor="url">Desired URL:</label>
      <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required/>
  
      <label htmlFor="columnLayout">Column layout:</label>
      <select id="columnLayout" value={columnLayout} onChange={(e) => setColumnLayout(parseInt(e.target.value))}>
        <option value={0}>Next to each other</option>
        <option value={1}>Underneath each other</option>
      </select>
  
      <fieldset>
        <legend>Visualizations:</legend>
        {visualizationLabels.map(({ value, label }) => (
          <label key={value} htmlFor={value}>
            <input
              type="checkbox"
              id={value}
              value={value}
              checked={visualizations.includes(value)}
              onChange={(e) => handleVisualizationChange(value, e.target.checked)}
            />
            {label}
          </label>
        ))}
      </fieldset>
  
      {visualizations.length > 0 && (
        <div>
          <h3>Descriptions:</h3>
          {visualizations.map((v, i) => (
            <div key={v}>
              <label htmlFor={`desc${i + 1}`}>{`Description ${i + 1}:`}</label>
              <input type="text" id={`desc${i + 1}`} value={descriptions[v] || ''} onChange={(e) => handleDescriptionChange(v, e)} required/>
            </div>
          ))}
        </div>
      )}
  
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
  
      <button type="submit">Submit</button>
    </form>

  );
          };  
