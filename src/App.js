import './App.scss';
import HomeScreen from '../src/components/homeScreen'
import SnippetDetails from './components/snippetScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './components/loginScreen';
import ErrorScreen from './components/errorScreen';
import AdminPanel from './components/adminPanel';
import { LoggedIn } from '../src/app/useStore'

function App() {
  const loggedIn = LoggedIn()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomeScreen mode="home" />} />
          <Route path="/filter" exact component={() => <HomeScreen mode="filterScreen" />} />
          <Route path="/snippet" exact component={() => <SnippetDetails />} />
          <Route path="/login" exact component={() => <LoginScreen />} />
          <Route path="/ssadmin" exact component={() => loggedIn ? <AdminPanel /> : <LoginScreen />} />
          <Route path="*"> <ErrorScreen mode={"other"} /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

