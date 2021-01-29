import React from 'react';

import { useState, useEffect } from 'react'; 

import DriverCard from '../DriverCard/DriverCard.js';
import testImage from '../../images/HAM.png';

import './Drivers.css';

const driverImages = [
    {id: 'AIT', src: require('../../images/LEC.png').default},
    {id: 'ALB', src: require('../../images/LEC.png').default},
    {id: 'BOT', src: require('../../images/HAM.png').default},
    {id: 'FIT', src: require('../../images/HAM.png').default},
    {id: 'GAS', src: require('../../images/HAM.png').default},
    {id: 'GIO', src: require('../../images/HAM.png').default},
    {id: 'GRO', src: require('../../images/HAM.png').default},
    {id: 'HAM', src: require('../../images/HAM.png').default},
    {id: 'HUL', src: require('../../images/HAM.png').default},
    {id: 'KVY', src: require('../../images/HAM.png').default},
    {id: 'LAT', src: require('../../images/LEC.png').default},
    {id: 'LEC', src: require('../../images/HAM.png').default},
    {id: 'MAG', src: require('../../images/HAM.png').default},
    {id: 'NOR', src: require('../../images/HAM.png').default},
    {id: 'OCO', src: require('../../images/HAM.png').default},
    {id: 'PER', src: require('../../images/HAM.png').default},
    {id: 'RAI', src: require('../../images/HAM.png').default},
    {id: 'RIC', src: require('../../images/HAM.png').default},
    {id: 'RUS', src: require('../../images/HAM.png').default},
    {id: 'SAI', src: require('../../images/LEC.png').default},
    {id: 'STR', src: require('../../images/HAM.png').default},
    {id: 'VER', src: require('../../images/HAM.png').default},
    {id: 'VET', src: require('../../images/HAM.png').default},
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
    
    // const driverImageId = driverImages.map(driverImagesId => driverImagesId.id);
    // const driverImage = driverImages.map(driverImageSrc => driverImageSrc.src);

    const driverImageId = driverImages.map((driverId) => driverId.id);
    const driverImageSrc = driverImages.map((driverSrc) => driverSrc.src);


    return (
        <div>
            <div>
                {driverList.map((drivers, index) => {
                    return (
                        <div key={index}>
                            
                                {drivers.MRData.DriverTable.Drivers.map((driver,i) => {
                                    return (
                                        (driver.code === driverImageId) ?
                                            <div key={i}>
                                                <img src={driverImageSrc.src} alt="driver" />
                                            </div>
                                            :
                                            <div>Hello World</div>
                                        
                                    )
                                        // return (
                                        //     <div key={i} className="card">
                                        //         <DriverCard className="driverCard"
                                        //             driverFirstName={driver.givenName}
                                        //             driverLastName={driver.familyName}
                                        //             driverNumber={driver.permanentNumber}
                                        //             driverDetails={driver.url}
                                        //             // driverImg={driverImage}
                                        //         />
                                        //     </div>
                                        // )
                                })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Drivers;

{/* {driverImages.map((driverId, key) => {
                                console.log(driverId.id)
                                console.log(driverId.src)
                                return (
                                    <div key={key}>
                                        <img src={driverId.src} alt="ah"/>
                                    </div>
                                )
                            })} */}