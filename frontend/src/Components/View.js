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
    const [desc1, setDesc1] = useState("");
    const [desc2, setDesc2] = useState("");
    const [desc3, setDesc3] = useState("");
    const [desc4, setDesc4] = useState("");
    const [desc5, setDesc5] = useState("");
    const [filteredVisualizations, setFilteredVisualizations] = useState([]);

    const visualizations = {
        v1: <Visualization1 key="v1" desc={desc1}/>,
        v2: <Visualization2 key="v2" desc={desc2}/>,
        v3: <Visualization3 key="v3" desc={desc3}/>,
        v4: <Visualization4 key="v4" desc={desc4}/>,
        v5: <Visualization5 key="v5" desc={desc5}/>
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
               setDesc1(data.data.decs1);
               setDesc2(data.data.desc2);
               setDesc3(data.data.desc3);
               setDesc4(data.data.desc4);
               setDesc5(data.data.desc5);

    }
    else if (data.status !== 200)
         {
            setFounded(false);
         }
      };
    
    useEffect(() => {
        callingTheServer();
    }, [url])

    

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
            <div>
             {
                filteredVisualizations.map(view =>
                    visualizations[view]
                )
            }
           </div>


            </div>

  
       );
}