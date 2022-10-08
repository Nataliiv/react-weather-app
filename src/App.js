
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by Nataliia Ivanchak and is {""}
          <a href="https://github.com/Nataliiv/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


