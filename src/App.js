
import './App.scss';
import NavBar from '../src/components/navBar'
import HomeScreen from '../src/components/homeScreen'
import SnippetDetails from './components/snippetScreen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      {/* <SnippetDetails /> */}
    </div>
  );
}

export default App;
