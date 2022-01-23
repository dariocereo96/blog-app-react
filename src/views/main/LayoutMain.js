import React from 'react';
import {Outlet} from 'react-router';
import Nav from './components/Nav';

const LayoutMain = () => {
  return (
    <div>
    	<Nav/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default LayoutMain;