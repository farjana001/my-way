import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="/home">
            <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
