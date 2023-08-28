import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isAdmin = !!localStorage.getItem('jwt');

  const adminBar = (
    <nav>
      <Link to="/admin">Admin root</Link>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/addresses">Addresses</Link>
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
      {!isAdmin ? adminBar : <></>}
    </div>
  );
};

export default Navbar;
