import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer />
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
