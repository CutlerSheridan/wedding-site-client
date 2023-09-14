import { Link, useNavigate } from 'react-router-dom';
import './Error404.css';
import Navbar from './Navbar';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error404-wrapper">
      <Navbar />
      <div className="error404">
        <h1>Error 404</h1>
        <p>Oh no, this page doesn't exist!</p>
        <Link
          to=""
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Error404;
