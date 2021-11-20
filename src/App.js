import './App.scss';

import HomeScreen from '../src/components/homeScreen'
import SnippetDetails from './components/snippetScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './components/loginScreen';
import AdminPanel from './components/adminPanel';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact component={() => <HomeScreen mode="home" />} />
          <Route path="/filter" exact component={() => <HomeScreen mode="filterScreen" />} />
          <Route path="/snippet" exact component={() => <SnippetDetails />} />
          <Route path="/login" exact component={() => <LoginScreen />} />
          <Route path="/admin" exact component={() => <AdminPanel />} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;

