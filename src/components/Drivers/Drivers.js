import React from 'react';

import { useState, useEffect } from 'react'; 

import DriverCard from '../DriverCard/DriverCard.js';
import DriverDB from './DriversDB'

import './Drivers.css';

const Drivers = () => {
    const F1_API_CALL = "http://ergast.com/api/f1/2020/drivers.json";

    const [driverList, setDriverList] = useState([]);
    
    useEffect(() => {
        const fetchResponse = async () => {
            const response = await fetch(F1_API_CALL);
            const data = await response.json();
            setDriverList([data]);
            console.log(data);
        };
        fetchResponse();
    }, []);

    return (
        <div>
            <div>
                {driverList.map((drivers, index) => {
                    return (
                        <div key={index}>
                                {drivers.MRData.DriverTable.Drivers.map((driver,i) => {
                                    return (
                                        <div key={i} className="card">
                                            {DriverDB.map((driverId, key) => {
                                                return (
                                                    (driver.code === driverId.id) ?
                                                    <div key={key}>
                                                        <DriverCard className="driverCard"
                                                            driverFirstName={driver.givenName}
                                                            driverLastName={driver.familyName}
                                                            driverNumber={driver.permanentNumber}
                                                            driverDetails={driver.url}
                                                            driverImg={driverId.src}
                                                        />
                                                    </div>
                                                    :
                                                    null
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Drivers;

// {driverImages.map((driverId, key) => {
//     console.log(driverId.id)
//     console.log(driverId.src)
//     return (
//     <div key={key}>
//     <img src={driverId.src} alt="ah"/>
//     </div>
//     )
// })}


    //     return (
    //      <div key={i} className="card">
    //         <DriverCard className="driverCard"
    //             driverFirstName={driver.givenName}
    //             driverLastName={driver.familyName}
    //             driverNumber={driver.permanentNumber}
    //             driverDetails={driver.url}
    //             // driverImg={driverImage}
    //         />
    //      </div>
    //  )