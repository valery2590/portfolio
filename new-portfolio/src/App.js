import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';


function App() {
  return (
    <div className="App">
    <HashRouter>
        <Switch>
          <Route exact path="/">
              <Landing/>    
          </Route>
          <Route exact path="/myhistory">
              <QuestionsPage/>
          </Route>
        
        </Switch>
      
        </HashRouter>
    </div>
  );
}

export default App;