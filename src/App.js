import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from "./containers/Header/Header";

import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Header}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
