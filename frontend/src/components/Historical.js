import React, { useState } from "react";



const LogIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="full">
            <div className="left-side">
                <div className="text">
                    <h1>Log in to ChartBook</h1>
                    <Link to="/Register" className="register-link">
                        Subscribe
                    </Link>
                </div>
                <form>
                    <label>
                        <h2>Email:</h2>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
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