import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';


function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/">
              <Landing/>    
          </Route>
          <Route exact path="/myhistory">
              <QuestionsPage/>
          </Route>
        
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
