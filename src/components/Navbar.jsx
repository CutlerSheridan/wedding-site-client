import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAdmin = !!localStorage.getItem('jwt');

  const adminBar = (
    <nav>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/addresses">Addresses</Link>
    </nav>
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/registry">Registry</Link>
      </nav>
      {isAdmin ? adminBar : <></>}
    </div>
  );
};

export default Navbar;
