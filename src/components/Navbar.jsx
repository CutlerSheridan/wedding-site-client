import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const location = useLocation();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const isAdmin = !!jwt;

  useEffect(() => {
    if (hamburgerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [hamburgerIsOpen]);

  const generalBar = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navbar-link'
            : isActive
            ? 'navbar-link navbar-link-active'
            : 'navbar-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/rsvp"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navbar-link'
            : isActive
            ? 'navbar-link navbar-link-active'
            : 'navbar-link'
        }
      >
        RSVP
      </NavLink>
      <NavLink
        to="/itinerary"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navbar-link'
            : isActive
            ? 'navbar-link navbar-link-active'
            : 'navbar-link'
        }
      >
        Itinerary
      </NavLink>
      <NavLink
        to="/hotels"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navbar-link'
            : isActive
            ? 'navbar-link navbar-link-active'
            : 'navbar-link'
        }
      >
        Hotels
      </NavLink>
      <NavLink
        to="/registry"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navbar-link'
            : isActive
            ? 'navbar-link navbar-link-active'
            : 'navbar-link'
        }
      >
        Registry
      </NavLink>
    </>
  );
  const adminBar = (
    <>
      {/* <NavLink to="/admin/dashboard" className={({isActive, isPending}) => isPending ? 'navbar-link' : isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>Dashboard</NavLink>
      <NavLink to="/admin/addresses" className={({isActive, isPending}) => isPending ? 'navbar-link' : isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>Addresses</NavLink>
      <NavLink to="/admin/group-edit" className={({isActive, isPending}) => isPending ? 'navbar-link' : isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>Edit Group</NavLink>
      <NavLink to="/admin/gameinfo" className={({isActive, isPending}) => isPending ? 'navbar-link' : isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>Characters</NavLink>
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
    </>
  );
};

export default Navbar;
