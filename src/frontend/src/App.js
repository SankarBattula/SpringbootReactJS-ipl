import './App.css';
import {BrowserRouter as Routes, Route , Switch} from 'react-router-dom';
import {TeamPage } from './pages/TeamPage';
import {MatchPage} from './pages/MatchPage';

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
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
