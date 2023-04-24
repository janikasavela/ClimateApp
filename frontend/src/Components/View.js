import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getCustom } from './services/authService.js';

import Visualization1 from "./visualizationViews/visualizations/Visualization1.js";
import Visualization2 from "./visualizationViews/visualizations/Visualization2.js";
import Visualization3 from "./visualizationViews/visualizations/Visualization3.js";
import Visualization4 from "./visualizationViews/visualizations/Visualization4.js";
import Visualization5 from "./visualizationViews/visualizations/Visualization5.js";

export default function View() {

    const [founded, setFounded] = useState(true);
    const [parallel, setParallel] = useState(false);
    const [title, setTitle] = useState("");
    const [descriptions, setDescriptions] = useState({});
    const [filteredVisualizations, setFilteredVisualizations] = useState([]);

    const visualizations = {
        v1: <Visualization1 key="v1"/>,
        v2: <Visualization2 key="v2"/>,
        v3: <Visualization3 key="v3"/>,
        v4: <Visualization4 key="v4"/>,
        v5: <Visualization5 key="v5"/>
    }

    const { url } = useParams();

    const callingTheServer = async () => {

       const data = await getCustom(url); 
    
       console.log(data);
       if (data.status === 200) {

        const views = data.data.visualizations.split(",");
               setParallel(data.data.column_layout);
               setTitle(data.data.title);
               console.log(views);
               setFilteredVisualizations(views);

    }
    else if (data.status !== 200)
         {
            setFounded(false);
         }
      };
    
    useEffect(() => {
        callingTheServer();

       const moi = filteredVisualizations.map(view =>
            visualizations[view] );
            console.log("Moikkamoi");
            console.log(moi[0]);


    }, [])

    

     if(!founded){
         return (
             <div>
                <h2>No view found. Return back to<Link to="/"> home page</Link></h2>
            </div>
         )
     }
    
     return (
        <div>
            <h2>{title}</h2>
             {
                filteredVisualizations.map(view =>
                    visualizations[view]
                )
            }
            </div>
  
       );
}