import React from 'react';
import './DriverCard.css'

const DriverCard = ({ driverFirstName, driverLastName, driverNumber, driverDetails, driverImg}) => {
    return (
        <div className="outerCard">
            <div className="innerCard">
                <p className="styledText styledText--fontSize">{driverFirstName}</p>
                <p className="styledText">{driverLastName}</p>
                <p className="styledText">{driverNumber}</p>
            </div>
            <div className="driverDetailSection">
                <span className="driverDetails"><a href={driverDetails}>See details</a></span>
            </div>
            <div>
                {/* <p>{driverImg}</p> */}
                <img src={driverImg} alt="drivers"/>
            </div>
        </div>
    )
}

export default DriverCard;