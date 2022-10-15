import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
import Navi from './navi';

const App = () => {
  return (
    <>
      <div>
       
        <Navi />
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    
      
    </>
  );
};

export default App;