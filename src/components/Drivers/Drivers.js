import React from 'react';
import { useState, useEffect } from 'react'; 
import Search from '../Search/Search'
import DriverCard from '../DriverCard/DriverCard.js';
import DriverDB from './DriversDB'

import './Drivers.css';

const Drivers = () => {
    const F1_API_CALL = "http://ergast.com/api/f1/2020/drivers.json";

    const [driverList, setDriverList] = useState([]);
    const [filtered, setFiltered] = useState('');
    const [driverFilter, setDriverFilter] = useState([]);
    
    useEffect(() => {
        const fetchResponse = async () => {
            const response = await fetch(F1_API_CALL);
            const data = await response.json();
            setDriverList([data]);
        };
        fetchResponse();
    }, []);

    const handleFilter = (event) => {
        setFiltered(event.target.value)
        console.log(event.target.value);
    }

    // useEffect(() => {
    //     const filterDriver = driverList.filter(drivers => {
    //         return drivers.familyName.toLowerCase().includes(filtered.toLowerCase())
    //     });
    //     setDriverFilter(filterDriver);
    // }, [filtered, driverList]);


    const driverData = driverList.map((drivers) => (
        drivers.MRData.DriverTable.Drivers.map((driver) => {
            return (
                <div key={driver.id} className="card">
                    {DriverDB.map((driverId) => {
                        return (
                            (driverId.id === driver.code ) ?
                            <div key={driverId.id}>
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
            }
        ))
    )

    const filteredDrivers = driverData.filter(driver => (
        console.log('driver', driver)
        // return driver.familyName.toLowerCase().includes(filtered.toLowerCase())
    ))


    return (
        <div>
            <input 
                name="Search for Driver or team"
                value={filtered}
                onChange={handleFilter}
            />
            <div>
                {filteredDrivers}
                {/* {driverData} */}
            </div>
        </div>
    )
}

export default Drivers;