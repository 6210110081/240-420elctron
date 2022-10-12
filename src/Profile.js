import React from "react";
import { Link } from "react-router-dom";
 
export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <div>
          <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1124F/production/_119932207_indifferentcatgettyimages.png.webp" alt="Profile"></img> 
        </div>
      </div>
    );
  }
}