import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';

import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
