import React from 'react';
import Visualization1 from './visualizations/Visualization1';
import Visualization2 from './visualizations/Visualization2';

export default function V1() {

    return (
        <React.Fragment>
        <Visualization1 />
        <Visualization2 />

      <div className="chart-info">
          <p>Description, info and links about visualization here!</p>
        </div>
        </React.Fragment>
    );

};