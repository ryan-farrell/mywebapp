import React from 'react';
import Nav from './Components/Navbar';
import './App.css';
import WorkHistory from './Components/WorkHistory';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
       <MainBody/>
      </header>
      <WorkHistory/>
      <Footer/>
    </div>
  );
}

export default App;
