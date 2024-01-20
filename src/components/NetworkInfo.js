import React from 'react';

const NetworkInfo = ({networks}) => {
    return (
        <div>
            <h4>NETWORK:</h4>
            {networks.map((net, index) => (
                <p key={index}>{net}</p>
            ))}
        </div>
    );
};

export default NetworkInfo;