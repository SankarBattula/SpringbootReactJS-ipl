import './App.scss';
import {BrowserRouter as Routes, Route , Switch} from 'react-router-dom';
import {TeamPage } from './pages/TeamPage';
import {MatchPage} from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage/> 
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
