import React from 'react';
import './DriverCard.css'

const DriverCard = ({ driverFirstName, driverLastName, driverNumber, driverDetails, driverImg}) => {
    return (
        <div className="outerCard">
            <div className="innerCard">
                <p className="styledText styledText--fontSize givenName">{driverFirstName}</p>
                <p className="styledText familyName">{driverLastName}</p>
                <p className="styledText driverNumber">{driverNumber}</p>
            </div>
            <div className="driverDetailSection">
                <span className="driverDetails"><a href={driverDetails}>See details</a></span>
            </div>
            <div className="driverImageContainer">
                {/* <p>{driverImg}</p> */}
                <img src={driverImg} alt="drivers" className="driverDim"/>
            </div>
        </div>
    )
}

export default DriverCard;