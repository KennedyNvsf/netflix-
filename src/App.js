import React from 'react';


//COMPONENTS
import NavBar from './components/navbar/navbar.component';
import HomeScreen from './components/homescreen/homescreen.component';
import Banner from './components/banner/banner.component';

import './styles/app.css';



function App() {



  return (
    <div className="App">

      <NavBar/>
      <Banner/>
      <HomeScreen/>
     
    </div>
  );
}

export default App;
