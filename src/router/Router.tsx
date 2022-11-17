import React from 'react';
import '../App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../views/Home';
import Header from '../components/HeaderComponent/Header';

const Layout: React.FC = (props: any) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <>
              <Header />
              <div className='container'>
                <Home name="Rebeca" />
              </div>
            </>
          </React.Fragment>}
        />
        <Route path='/spanish' element={
          <React.Fragment>
            <>
              <Header />
              <div className='container'>
                <Home name="Omar" />
              </div>
            </>
          </React.Fragment>}
        />
      </Routes>
    </Router>
  );
}

export default Layout;
