
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 
const Home = () => {
    return (
        <div className="home-layout">
      <div className="box1">
        <img
          src="./images/home_image.png"
          alt="Home Image"
          className="responsive-image"
        />
            </div>
            <div className="box2">
                <div className="box2_1">
                    <h1>Learn Markets</h1>
                    <img src="./images/laptop_image.PNG" alt="Home Image"className="responsive-image"/>
                </div>
                <div className="box2_2">
                    <h1>Real-time Prices</h1>
                    <img src="./images/real-time.png" alt="Home Image"className="responsive-image"/>
                </div>
                <div className="box2_3">
                    <h1>Chart Insights</h1>
                    <img src="./images/trade.jpg" alt="Home Image"className="responsive-image"/>
                </div>
            </div>
            <div className="box3">

                
                <h1>Join our Newsletter</h1>
                <h2>Sign up for our newsletter to receive the latest news and exclusive offers every week.</h2>
                <Link to="/LogIn"> 
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;