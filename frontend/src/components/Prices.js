import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Prices.css';

function Prices(props) {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=21&page=1&sparkline=false&locale=en')
      .then(response => {
        setCrypto(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: null, 
    maximumFractionDigits: 2, 
  });
  
  return (
    <div className="price-layout">
      <h1>Cryptocurrency Prices</h1>
      <h2>Sorted by market cap</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>High (24Hr)</th>
              <th>Low (24Hr)</th>
              <th>Change (24Hr)</th>
              <th>Market cap</th>
            </tr>
          </thead>
          <tbody>
            {crypto.map((currency, index) => (
              <tr key={index}>
                <td>
                  <img src={currency.image} alt={`${currency.name} Logo`} width="30" />
                  {currency.name}
                </td>
                <td><p>{formatter.format(currency.current_price)}</p></td>
                <td><p>{formatter.format(currency.high_24h)}</p></td>
                <td><p>{formatter.format(currency.low_24h)}</p></td>
                <td><p>{currency.price_change_percentage_24h.toFixed(2)}%</p></td>
                <td><p>{formatter.format(currency.market_cap)}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prices;