import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.png';
import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));

  const updateJwt = (jwtData) => {
    const newJwt = jwtData?.token ?? jwtData;

    setJwt(newJwt);
    if (newJwt) {
      localStorage.setItem('jwt', newJwt);
    } else {
      localStorage.removeItem('jwt');
    }
  };

  return (
    <div className="app-pageWrapper">
      <Navbar jwt={jwt} />
      <div className="app-contentWrapper">
        <Outlet context={{ jwt, updateJwt }} />
      </div>
    </div>
  );
}

export default App;
