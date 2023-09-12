import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ jwt, updateJwt }) => {
  const location = useLocation();
  const isAdmin = !!jwt;

  const adminBar = (
    <nav>
      {/* <Link to="/admin">Admin root</Link> */}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          updateJwt(null);
        }}
      >
        {jwt ? 'Log Out' : 'Log In'}
      </a>
      <Link to="/admin/dashboard">Dashboard</Link>
      {/* <Link to="/admin/addresses">Addresses</Link> */}
    </nav>
  );

  return (
    <div className="navbar-wrapper">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/registry">Registry</Link>
      </nav>
      {isAdmin || location.pathname.includes('admin') ? adminBar : <></>}
    </div>
  );
};

export default Navbar;
