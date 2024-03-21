import React from "react";
import Nav from '../../components/navb/Nav';

import hydroData from '../../data/hydro/hydropwers.json'

function HydroData() {
    let myData;
    // function getData(arr : Array<any>){
    //     for ( let data : number=0; data<arr.length ; data++){
    //         return data;
    //     }
    // }

    return (
        <>
            <Nav />
            <div>
                <h1>List of Projects :</h1>
                <ol>
                    {hydroData.map((item, index) => (
                        <li key={index}> Project : {index} -- {item.Project} , langitude : {item.Longitude} , lattitude : {item.Latitude}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default HydroData;