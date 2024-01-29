import React from 'react';
import './styles/CurrencyInfo.css'

const CurrencyInfo = ({name, places}) => {
    return (
        <div>
           <h2>Currency: {name}</h2>
            {places.map((place, index) => (
                <div key={index}>
                    <h3>Place {index + 1}:</h3>
                    <p>Name: {place.name}</p>
                    <p>Price: {place.price} USDT</p>
                </div>
            ))}
        </div>
    );
};

export default CurrencyInfo;