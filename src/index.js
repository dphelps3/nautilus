import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./css/App.css";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    Repositories,
} from "./components";

ReactDOM.render(

    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositories" element={<Repositories /> } />
        </Routes>
        <Footer />
    </Router>,

    document.getElementById("root")
);

serviceWorker.unregister();

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
