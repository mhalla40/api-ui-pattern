import React, { Component } from "react";
import "./App.css";

let url = "https://swapi.dev/api/";

//getting the api from url
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Star Wars</h1>
      </div>
    );
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((convertedResponse) => {
        console.log(convertedResponse.people);
      });
  }
}

export default App;
