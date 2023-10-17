import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.png';
import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const App = ({ children }) => {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
  const location = useLocation();

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
      <Navbar jwt={jwt} updateJwt={updateJwt} />
      <div className="app-contentWrapper">
        <AnimatePresence mode="wait">
          {children ?? (
            <Outlet key={location.path} context={{ jwt, updateJwt }} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
