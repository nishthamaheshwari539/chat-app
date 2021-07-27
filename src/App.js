import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </>
  );
}

export default App;
