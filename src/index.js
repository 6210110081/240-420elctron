import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Profile from './Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<App/>} />
          <Route path="/Profile" exact element={<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();