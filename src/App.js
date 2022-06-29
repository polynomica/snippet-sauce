
import './App.css';
import DashHome from './pages/dashboard/dashHome';
import LoginPage from './pages/login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoggedIn } from '../src/app/useStore'



function App() {
  const loggedIn = LoggedIn()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={() => loggedIn ? <DashHome /> : <LoginPage />} />
          <Route path="/" exact component={() => loggedIn ? <DashHome /> : <LoginPage />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
