import React, { useState, useEffect } from 'react';
import CurrencyInfo from './components/CurrencyInfo';
import ExchangeInfo from './components/ExchangeInfo';
import NetworkInfo from './components/NetworkInfo';

const App = () => {
    const [currencyData, setCurrencyData] = useState({
        name: 'BTC/USDT',
        places: [
            {
                name: 'Binance',
                price: '41099'
            },
            {
                name: 'OKX',
                price: '41967'
            },
        ],
    });
    const [place1Data, setPlace1Data] = useState({
        volume: 125712123,
        change: -1.2,
        orderBook: [41967, 41970, 41972, 41976],
        network: ['BTC Network', 'ERC20', 'XRP', 'MANA']
    })
    const [place2Data, setPlace2Data] = useState({
        volume: 89712123,
        change: -1.4,
        orderBook: [42110, 42210, 42240, 42260],
        network: ['BTC Network', 'XRP'],
    })
    useEffect(() => {
            const fetchData = () => {
                const newPrice1 = Math.floor(Math.random() * 10000);
                const newPrice2 = Math.floor(Math.random() * 10000);
                const newChange1 = Math.floor(Math.random() * 1000) / 10;
                const newChange2 = Math.floor(Math.random() * 1000) / 10;

                setCurrencyData((prevData) => ({
                    ...prevData,
                    places: [
                        {
                            ...prevData.places[0],
                            price: newPrice1,
                        },
                        {
                            ...prevData.places[1],
                            price: newPrice2
                        }
                    ]
                }))
                setPlace1Data({
                    volume: Math.floor(Math.random() * 100000000),
                    change: newChange1,
                    orderBook: [newPrice1, newPrice1 + 3, newPrice1 + 5, newPrice1 + 7],
                    network: ['BTC Network', 'ERC20', 'XRP', 'MANA']
                })

                setPlace2Data({
                    volume: Math.floor(Math.random() * 100000000),
                    change: newChange2,
                    orderBook: [newPrice2, newPrice2 + 10, newPrice2 + 30, newPrice2 + 50],
                    network: ['BTC Network', 'XRP'],
                })
            }

            fetchData()

            const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000)

            return () => clearInterval(intervalId)
        },
        [])
    return (
        <div>
            <CurrencyInfo {...currencyData} />
            <ExchangeInfo {...place1Data} />
            <NetworkInfo networks={place1Data.network} />
            <ExchangeInfo {...place2Data} />
            <NetworkInfo networks={place2Data.network} />
        </div>
    );
};

export default App;