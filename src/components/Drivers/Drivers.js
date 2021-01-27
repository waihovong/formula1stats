import React from 'react';

import { useState, useEffect } from 'react'; 

import DriverCard from '../DriverCard/DriverCard.js';

import testImage from '../../images/HAM.png';

import './Drivers.css';

const driverImages = [
    {id: 'HAM', src: '../../images/HAM.png'},
    {id: 'FIT', src: '../../images/HAM.png'},
    {id: 'ALB', src: '../../images/LEC.png'},
]

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
    
    const driverImageId = driverImages.map(driverImage => driverImage.id);

    return (
        <div>
            <div>
                {driverList.map((drivers, index) => {
                    return (
                        <div key={index}>
                            {drivers.MRData.DriverTable.Drivers.map((driver, i) => {
                                if(driver.id === driverImageId) {
                                    <img src={driverImageId} alt={index} />
                                }
                                return (
                                    <div key={index} className="card">
                                        <DriverCard className="driverCard"
                                            driverFirstName={driver.givenName}
                                            driverLastName={driver.familyName}
                                            driverNumber={driver.permanentNumber}
                                            driverDetails={driver.url}
                                            // driverImg={driverImage}
                                        />
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