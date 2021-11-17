import './scss/app.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={Form} />
      </Router>
    </div>
  );
}

export default App;
