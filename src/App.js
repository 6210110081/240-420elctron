import React from "react";
import { Link } from "react-router-dom";
 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img src="https://cdn.pixabay.com/photo/2020/06/12/22/04/lion-5292016_960_720.jpg" alt="App"></img>
        </div>
      </div>
    );
  }
}