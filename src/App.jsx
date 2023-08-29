import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.png';
import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));

  const updateJwt = (newJwt) => {
    setJwt(newJwt);
    if (newJwt) {
      localStorage.setItem('jwt', newJwt);
    } else {
      localStorage.removeItem('jwt');
    }
  };

  return (
    <div className="pageWrapper">
      <Navbar jwt={jwt} />
      <Outlet context={{ jwt, updateJwt }} />
    </div>
  );
}

export default App;
