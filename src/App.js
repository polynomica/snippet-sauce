
import './App.scss';
import NavBar from '../src/components/navBar'
import HomeScreen from '../src/components/homeScreen'
import SnippetDetails from './components/snippetScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <HomeScreen />} />
          <Route path="/snippet" exact component={() => <SnippetDetails />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
