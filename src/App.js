import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Signals from './pages/Signals';
import Questions from './pages/Questions';
import Tests from './pages/Tests';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import QnA from './pages/QnA';
import TestSet from './pages/TestSet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signals">
              <Signals />
            </Route>
            <Route exact path="/questions">
              <Questions />
            </Route>
            <Route exact path="/tests">
              <Tests />
            </Route>
            <Route path="/projects/:id">
              <QnA />
            </Route>
            <Route path="/tests/:id">
              <TestSet />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
