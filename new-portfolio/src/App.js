import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Landing/>
      </Router>
    </div>
  );
}

export default App;
