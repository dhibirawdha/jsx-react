
import './App.css';
import Profilephoto from './Component/Profiles/Profilephoto.js';
import Fullname from './Component/Profiles/Fullname.js';
import Address from './Component/Profiles/Address.js';
import { Fragment } from 'react';
import React from 'react';
function App() {
  return( 
  <React.Fragment>  
    <Address/>
    <Fullname/>
    <Profilephoto/>
    </React.Fragment>
  );
  
}

export default App;
