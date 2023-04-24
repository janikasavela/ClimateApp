import React, { useState } from 'react';
import { addView } from './services/authService.js';

export default function VisualizationForm (username) {
  const [url, setUrl] = useState('');
  const [columnLayout, setColumnLayout] = useState(0);
  const [visualizations, setVisualizations] = useState([]);
  const [title, setTitle] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc3, setDesc3] = useState('');
  const [desc4, setDesc4] = useState('');
  const [desc5, setDesc5] = useState('');


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
          desc1,
          desc2,
          desc3,
          desc4,
          desc5,
          });

         const body = {
            url,
            columnLayout,
            vToSave,
            user,
            title,
            desc1,
            desc2,
            desc3,
            desc4,
            desc5
        };

    await addView(body);

    
    setUrl('');
    setColumnLayout(0);
    setVisualizations([]);
    setTitle('');
    setDesc1('');
    setDesc2('');
    setDesc3('');
    setDesc4('');
    setDesc5('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">URL:</label>
      <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required/>

      <label htmlFor="columnLayout">Column layout:</label>
      <select id="columnLayout" value={columnLayout} onChange={(e) => setColumnLayout(parseInt(e.target.value))}>
        <option value={0}>Next to each other</option>
        <option value={1}>Underneath each other</option>
      </select>

      <fieldset>
        <legend>Visualizations:</legend>
        <label htmlFor="v1">
  <input 
    type="checkbox" 
    id="v1" 
    value="v1" 
    checked={visualizations.includes('v1')} 
    onChange={(e) => {
      const isChecked = e.target.checked;
      setVisualizations(prevState => {
        if (isChecked) {
          return [...prevState, 'v1'];
        } else {
          return prevState.filter(visualization => visualization !== 'v1');
        }
      });
    }} 
  />
  v1
</label>
        <label htmlFor="v2">
          <input type="checkbox" id="v2" value="v2" checked={visualizations.includes('v2')} 
          onChange={(e) => {
            const isChecked = e.target.checked;
            setVisualizations(prevState => {
              if (isChecked) {
                return [...prevState, 'v2'];
              } else {
                return prevState.filter(visualization => visualization !== 'v2');
              }
            });
          }} 
          />
          v2
        </label>
        <label htmlFor="v3">
          <input type="checkbox" id="v3" value="v3" checked={visualizations.includes('v3')} 
          onChange={(e) => {
            const isChecked = e.target.checked;
            setVisualizations(prevState => {
              if (isChecked) {
                return [...prevState, 'v3'];
              } else {
                return prevState.filter(visualization => visualization !== 'v3');
              }
            });
          }} 
          />
          v3
        </label>
        <label htmlFor="v4">
          <input type="checkbox" id="v4" value="v4" checked={visualizations.includes('v4')} 
          onChange={(e) => {
            const isChecked = e.target.checked;
            setVisualizations(prevState => {
              if (isChecked) {
                return [...prevState, 'v4'];
              } else {
                return prevState.filter(visualization => visualization !== 'v4');
              }
            });
          }} 
          />
      v4
    </label>
    <label htmlFor="v5">
      <input type="checkbox" id="v5" value="v5" checked={visualizations.includes('v5')} 
      onChange={(e) => {
        const isChecked = e.target.checked;
        setVisualizations(prevState => {
          if (isChecked) {
            return [...prevState, 'v5'];
          } else {
            return prevState.filter(visualization => visualization !== 'v5');
          }
        });
      }} 
      />
      v5
    </label>
  </fieldset>

  <label htmlFor="title">Title:</label>
  <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

  <label htmlFor="desc1">Description 1:</label>
  <input type="text" id="desc1" value={desc1} onChange={(e) => setDesc1(e.target.value)} />

  <label htmlFor="desc2">Description 2:</label>
  <input type="text" id="desc2" value={desc2} onChange={(e) => setDesc2(e.target.value)} />

  <label htmlFor="desc3">Description 3:</label>
  <input type="text" id="desc3" value={desc3} onChange={(e) => setDesc3(e.target.value)} />

  <label htmlFor="desc4">Description 4:</label>
  <input type="text" id="desc4" value={desc4} onChange={(e) => setDesc4(e.target.value)} />

  <label htmlFor="desc5">Description 5:</label>
  <input type="text" id="desc5" value={desc5} onChange={(e) => setDesc5(e.target.value)} />

  <button type="submit">Save</button>
</form>
);
};