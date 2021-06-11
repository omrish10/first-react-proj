import React from "react";
import "./App.css";
import SeasonsDisplay from "./SeasonDisplay";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component {
    state = { lat: null };

    loadLatitude() {
        window.navigator.geolocation.getCurrentPosition(
            (postion) => {
                this.setState({ lat: postion.coords.latitude });
                console.log(postion);
            },
            (err) => console.log(err)
        );
    }

    componentDidMount() {
        this.loadLatitude();
    }

    

    render() {
        return <SeasonsDisplay />;
    }
}
export default App;
