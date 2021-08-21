import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';


function App() {
  return (
    <div className="App">
<Router>
       <Landing/>    

        
              <QuestionsPage/>
              </Router>
    </div>
  );
}

export default App;