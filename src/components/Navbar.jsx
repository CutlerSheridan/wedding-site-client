import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const location = useLocation();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const isAdmin = !!jwt;

  const generalBar = (
    <>
      <Link to="/">Home</Link>
      <Link to="/rsvp">RSVP</Link>
      <Link to="/itinerary">Itinerary</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/registry">Registry</Link>
    </>
  );
  const adminBar = (
    <>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/addresses">Addresses</Link>
      <Link to="/admin/group-edit">Edit Group</Link>
      <Link to="/admin/gameinfo">Characters</Link>
      {jwt ? (
        <a
          href="/admin/auth"
          onClick={(e) => {
            e.preventDefault();
            updateJwt(null);
          }}
        >
          Log Out
        </a>
      ) : (
        ''
      )}
    </>
  );

  return (
    <>
      <div className="navbar-wrapper-full">
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
    </>
  );
};

export default Navbar;
