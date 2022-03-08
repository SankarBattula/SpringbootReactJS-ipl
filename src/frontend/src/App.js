import './App.css';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import {TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/teams/:teamName">
        <TeamPage/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
