import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Landing from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import QuestionsPage from './pages/StoryPage';
import QuizPage from './pages/QuizPage';


function App() {
  return (
    <div className="App">
    <HashRouter>
        <Header/>
          <Switch>

            <Route exact path="/">
                <Landing/>    
            </Route>

            <Route exact path="/mystory">
              <QuestionsPage/>
            </Route>

            <Route exact path="/quiz">
              <QuizPage/>
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