import React, { useState, useEffect } from 'react';
import LineGraph from './LineGraph';

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    values: [],
  });

  const [selectedDuration, setSelectedDuration] = useState(4000);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  const fetchChartData = async (duration, crypto) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=eur&days=${duration}&interval=daily`);
    const data = await response.json();

    const newDates = [];
    const newPrices = [];
    data.prices.forEach((arr) => {
      newDates.push(new Date(arr[0]).toLocaleDateString());
      newPrices.push(arr[1].toFixed(2));
    });

    setChartData({ labels: newDates, values: newPrices });
  };

  useEffect(() => {
    fetchChartData(selectedDuration, selectedCrypto);
  }, [selectedDuration, selectedCrypto]);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleCryptoChange = (crypto) => {
    setSelectedCrypto(crypto);
  };

  return (
    <div className="chart-layout">
            <h3>Cryptocurrency Price Charts</h3>
      <div className="price-buttons">
        <button onClick={() => handleCryptoChange('bitcoin')}>Bitcoin</button>
        <button onClick={() => handleCryptoChange('ethereum')}>Ethereum</button>
        <button onClick={() => handleCryptoChange('tether')}>Tether</button>
        <button onClick={() => handleCryptoChange('binancecoin')}>Binance Coin</button>
        <button onClick={() => handleCryptoChange('ripple')}>XRP</button>
        <button onClick={() => handleCryptoChange('usd-coin')}>USD Coin</button>
        <button onClick={() => handleCryptoChange('staked-ether')}>Staked Ether</button>
        <button onClick={() => handleCryptoChange('dogecoin')}>Dogecoin</button>
        <button onClick={() => handleCryptoChange('cardano')}>Cardano</button>
        <button onClick={() => handleCryptoChange('solana')}>Solana</button>
        <button onClick={() => handleCryptoChange('tron')}>Tron</button>
        <button onClick={() => handleCryptoChange('the-open-network')}>Toncoin</button>
        <button onClick={() => handleCryptoChange('polkadot')}>Polkadot</button>
        <button onClick={() => handleCryptoChange('matic-network')}>Polygon</button>
        <button onClick={() => handleCryptoChange('litecoin')}>Litecoin</button>
        <button onClick={() => handleCryptoChange('shiba-inu')}>Shiba Inu</button>
        <button onClick={() => handleCryptoChange('wrapped-bitcoin')}>Wrapped Bitcoin</button>
        <button onClick={() => handleCryptoChange('dai')}>Dai</button>
        <button onClick={() => handleCryptoChange('bitcoin-cash')}>Bitcoin Cash</button>
        <button onClick={() => handleCryptoChange('leo-token')}>LEO Token</button>
        <button onClick={() => handleCryptoChange('avalanche-2')}>Avalanche</button>
      </div>
      <div className="line">
        <LineGraph labels={chartData.labels} values={chartData.values} />
      <div className="time-buttons">
        <button onClick={() => handleDurationChange(30)}>30 Days</button>
        <button onClick={() => handleDurationChange(180)}>6 months</button>
        <button onClick={() => handleDurationChange(365)}>1 Year</button>
        <button onClick={() => handleDurationChange(1825)}>5 Years</button>
      </div>
      </div>
    </div>
  );
};

export default Chart;
