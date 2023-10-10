import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const location = useLocation();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAdmin = !!jwt;
  const header = () => {
    if (location.pathname === '/') {
      return 'home';
    }
    if (location.pathname.includes('admin')) {
      return location.pathname.slice(7);
    }
    if (location.pathname.includes('pictures/')) {
      return 'picture';
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
        Hom<span className="navbar-linkLastLetter">e</span>
      </NavLink>
      <NavLink to="/rsvp" className={setLinkClass}>
        RSV<span className="navbar-linkLastLetter">P</span>
      </NavLink>
      <NavLink to="/itinerary" className={setLinkClass}>
        Itinerar<span className="navbar-linkLastLetter">y</span>
      </NavLink>
      <NavLink to="/hotel" className={setLinkClass}>
        Hote<span className="navbar-linkLastLetter">l</span>
      </NavLink>
      <NavLink to="/registry" className={setLinkClass}>
        Registr<span className="navbar-linkLastLetter">y</span>
      </NavLink>
    </>
  );
  const adminBar = (
    <>
      <NavLink to="/admin/dashboard" className={setLinkClass}>
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
      )}
    </>
  );
  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <>
      <div className="navbar-wrapper-full">
        <div className="navbar-names" onClick={goHome}>
          Cutler & Tyler
        </div>
        <div className="navbar-details" onClick={goHome}>
          January 27, 2024 • Los Angeles
        </div>
        <nav>{generalBar}</nav>
        {isAdmin || location.pathname.includes('admin') ? (
          <nav>{adminBar}</nav>
        ) : (
          <></>
        )}
        <div className="navbar-separator"></div>
      </div>

      {/* <div className="navbar-separator hamburger-separator"></div> */}

      <div className="hamburger-topBarWrapper">
        <div className="hamburger-topBar">
          <button
            type="button"
            className="hamburger-button"
            onClick={() => setHamburgerIsOpen(true)}
          >
            |||
          </button>
          <div className="navbar-names hamburger-names" onClick={goHome}>
            C & T
          </div>
          <div className="hamburger-topBarFiller"> </div>
        </div>
        <div className="navbar-separator hamburger-separator"></div>
      </div>
      <div className="navbar-wrapper-hamburger">
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

      <h1 className="internalHeader">{header()}</h1>
    </>
  );
};

export default Navbar;
