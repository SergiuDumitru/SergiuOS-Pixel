import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';


const App = () => {
  const [view, setView] = useState('desktop'); // 'desktop' or 'settings'



  return (
    <div className="parent-container">
      <Main view={view}/>
      <Navbar setView={setView} />
    </div>
  );
};

export default App;