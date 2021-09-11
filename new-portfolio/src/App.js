import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Landing from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import QuestionsPage from './pages/QuestionsPage';
import WhyPage from './pages/WhyPage';


function App() {
  return (
    <div className="App">
    <HashRouter>
        <Header/>
          <Switch>
            <Route exact path="/">
                <Landing/>    
            </Route>
            <Route exact path="/myHistory">
                <QuestionsPage/>
            </Route>
            <Route exact path="/whyPage">
              <WhyPage/>
            </Route>
            <Route exact path="/projects">
              <ProjectsPage/>
            </Route>
          </Switch>
        <Contact/>
    </HashRouter>
    </div>
  );
}

export default App;