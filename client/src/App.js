import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './components/Game';
import HighScores from './components/HighScores';
import Login from './components/Login'
import Rules from './components/Rules';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewRules from './components/NewRules';
import PrivateRoute from './PrivateRoute.js';


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route
            exact
            path="/"
            element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
            <Route 
            exact
            path="/game" 
            element={
              <PrivateRoute>
            <Game/>
            </PrivateRoute> }/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/rools" element={<NewRules />} />
          <Route 
          exact 
          path="/highscores" 
          element={
            <PrivateRoute>
          <HighScores />
          </PrivateRoute>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
