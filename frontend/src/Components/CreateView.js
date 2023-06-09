import React, { useState, useContext } from 'react';
import { addView, getUrl } from './services/authService.js';
import { UserInfoContext } from './context/userInfoContext.js';
import { toast } from 'react-toastify';

export default function CreateView() {
  const [url, setUrl] = useState('');
  const [columnLayout, setColumnLayout] = useState(0);
  const [visualizations, setVisualizations] = useState([]);
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState({});
  const { user } = useContext(UserInfoContext);

  const checkUrl = async () => {
    const data = await getUrl(url); 
    console.log("ollaan urlissa");
    console.log(data.data.length);

    if (data.data.length === 0) return true;

    else return false; 

};

  const handleSubmit = async (event) => {
    event.preventDefault();

   const check = await checkUrl();

   console.log("tultiin urlista"); 

   console.log (check);

   if (check) { 

    // save new visualization to database

    const vToSave = visualizations.toString();

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
    setDescriptions({}); } 

    else return toast.info(("The url with this name is already in use. Try a different url name!"), {position: toast.POSITION.BOTTOM_CENTER}); 
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
      <h3>Create View</h3>
      <label htmlFor="url">Desired URL:</label>
      <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required/>
  
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
          <h4>Your own description for the visualization:</h4>
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
