import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const location = useLocation();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const isAdmin = !!jwt;
  const header = () => {
    if (location.pathname === '/') {
      return 'welcome';
    }
    if (location.pathname.includes('admin')) {
      return location.pathname.slice(7);
    }
    return location.pathname.slice(1);
  };

  useEffect(() => {
    if (hamburgerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [hamburgerIsOpen]);

  const setLinkClass = ({ isActive, isPending }) => {
    let className = 'navbar-link';
    if (isActive) {
      className += ' navbar-link-active';
    }
    return className;
  };

  const generalBar = (
    <>
      <NavLink to="/" className={setLinkClass}>
        Home
      </NavLink>
      <NavLink to="/rsvp" className={setLinkClass}>
        RSVP
      </NavLink>
      <NavLink to="/itinerary" className={setLinkClass}>
        Itinerary
      </NavLink>
      <NavLink to="/hotels" className={setLinkClass}>
        Hotels
      </NavLink>
      <NavLink to="/registry" className={setLinkClass}>
        Registry
      </NavLink>
    </>
  );
  const adminBar = (
    <>
      {/* <NavLink to="/admin/dashboard" className={setLinkClass}>
        Dashboard
      </NavLink>
      <NavLink to="/admin/addresses" className={setLinkClass}>
        Addresses
      </NavLink>
      <NavLink to="/admin/group-edit" className={setLinkClass}>
        Edit Group
      </NavLink>
      <NavLink to="/admin/gameinfo" className={setLinkClass}>
        Characters
      </NavLink>
      {jwt ? (
        <a
          href="/admin/auth"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            updateJwt(null);
          }}
        >
          Log Out
        </a>
      ) : (
        ''
      )} */}
    </>
  );

  return (
    <>
      <div className="navbar-wrapper-full">
        <div className="navbar-names">
          Cutler & Tyler
          {/* • */}
        </div>
        <div className="navbar-details">January 27, 2024 • Los Angeles</div>
        <nav>{generalBar}</nav>
        {isAdmin || location.pathname.includes('admin') ? (
          <nav>{adminBar}</nav>
        ) : (
          <></>
        )}
      </div>

      <div className="navbar-wrapper-hamburger">
        <button
          type="button"
          className="hamburger-button"
          onClick={() => setHamburgerIsOpen(true)}
        >
          |||
        </button>
        <div
          className={`hamburger-overlay ${
            hamburgerIsOpen ? 'hamburger-overlay-visible' : ''
          }`}
          onClick={() => setHamburgerIsOpen(false)}
        ></div>
        <div
          className={`hamburger-wrapper ${
            hamburgerIsOpen ? 'hamburger-wrapper-visible' : ''
          }`}
        >
          <div className="hamburger-nav-container">
            <button
              type="button"
              className="hamburger-closeButton"
              onClick={() => setHamburgerIsOpen(false)}
            >
              X
            </button>
            <nav
              className="hamburger-nav"
              onClick={() => setHamburgerIsOpen(false)}
            >
              {generalBar}
              {isAdmin || location.pathname.includes('admin') ? adminBar : ''}
            </nav>
          </div>
        </div>
      </div>

      <h1>{header()}</h1>
    </>
  );
};

export default Navbar;
