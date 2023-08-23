import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.png';
import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pageWrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
