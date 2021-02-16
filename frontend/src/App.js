
import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const App = ()=> {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
    </Router>
  );
}

export default App;