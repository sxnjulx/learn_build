import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [backendUrl , setBackendUrl] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/app-config.json');
        const data = await response.json();
        setBackendUrl(data.backendUrl);
      } catch (error) {
        console.error('Error fetching app-config.json:', error);
      }
    };

    fetchData();
  }, []);

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
      <div>
        <p>this is the url displaying sgement</p>
        <h1>{backendUrl}</h1>

      </div>

    </div>
  );
}

export default App;
