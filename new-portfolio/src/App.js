import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';
import WhyPage from './pages/WhyPage';


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
          <Route exact path="/whyPage">
            <WhyPage/>
          </Route>
        </Switch>
    </HashRouter>
    </div>
  );
}

export default App;