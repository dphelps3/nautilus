import React from 'react';
import logo from '../media/dcp.png';
import '../css/App.css';

function Home() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    My name is David Phelps. <br />I enjoy using my creativity to build sustainable software solutions for businesses.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Home;