import React from 'react';
import {Outlet} from 'react-router';

const LayoutMain = () => {
  return (
    <div>
    	<Outlet/>
    </div>
  )
}

export default LayoutMain;