import React from 'react';

const ExchangeInfo = ({volume, change, orderBook, network}) => {
    return (
        <div>
            <h3>Place data:</h3>
            <p>Volume: {volume} USDT</p>
            <p>Change: {change} %</p>
            <h4>Order book:</h4>
            {orderBook.map((bid, index) => (
                <p key={index}>Order book BID/P{index + 1}: {bid} USDT</p>
            ))}
            <p>Order book BID/Total: {orderBook.reduce((sum, bid) => sum + bid, 0) / orderBook.length} USDT</p>
            <h4>Network:</h4>
            {network.map((net, index) => (
                <p key={index}>{net}</p>
            ))}
        </div>
    );
};

export default ExchangeInfo;