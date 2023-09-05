import React from 'react';
import './Analysis.css';
import Data from './Analysis.json';

const Analysis = () => {
    return (
        <div className="analysis-layout">
            <h1>Top Ten chart reading strategies for beginners</h1>
            <h2>Investing in the cryptocurrency market for the first time can indeed be overwhelming. There are numerous methods for investing in cryptocurrencies; however, none are as effective as the practice of analyzing charts.
                Below, we will delve into the top ten strategies suitable for beginners. These strategies will form the foundational basis upon which you commence your investing journey.
            </h2>
            <div className="content">
                {Data.map((item, index) => (
                    <div className="headings">
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.content_1}</p>
                        <img src={item.image} alt={item.title} />
                        <p>{item.content_2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Analysis;