import React from 'react';
import UserProviderContext from './store/userContext';
import LoginForm from './component/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <UserProviderContext>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Router>
      </UserProviderContext>
    </div>
  );
}

export default App;
