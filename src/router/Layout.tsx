import React from 'react';
import '../App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../views/Home';
import Header from '../components/HeaderComponent/Header';

const Layout: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <>
              <Header/>
              <Home/>
            </>
          </React.Fragment>}
        />
        <Route path='/spanish' element={
          <React.Fragment>
            <>
              <Header/>
              <Home/>
            </>
          </React.Fragment>}
        />
      </Routes>
    </Router>
  );
}

export default Layout;
