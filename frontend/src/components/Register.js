import React, { useState } from "react";
import './Register.css';
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {

    const [email, setEmail] = useState("");

    const onEmailRemove = () => {
        axios.post('/api/removeemail', {
            email: email
        })
        .then(response => {
            console.log(response.data);
            // You can update the UI or provide feedback to the user here
        })
        .catch(error => {
            console.error(error);
            // Handle the error appropriately
        });
    }

    return (
        <div className="full">
            <div className="left-side">
                <div className="texts">
                    <h1>Subscribe to ChartBook</h1>
                    <Link to="/Login" className="register-link">
                        Unsubscribe
                    </Link>
                </div>
                <form>
                    <label>
                        <h2>Email:</h2>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <button onClick={onEmailRemove}>Delete it !!</button>
                </form>
            </div>
            <div className="right-side">
                <h2>Stay current on trading techniques and cryptocurrency trends</h2>
                <img src="./images/LogIn_Register.jpg" alt="Fibonacci Retracements" style={{ width: '700px', height: '500px', borderRadius: '10px', marginBottom: '10px' }} />
            </div>
        </div>
    )
}

export default LogIn;