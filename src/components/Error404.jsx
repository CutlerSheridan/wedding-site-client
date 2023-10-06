import { Link, useNavigate } from 'react-router-dom';
import './Error404.css';
import Navbar from './Navbar';
import Cardstock from './Cardstock';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Cardstock>
        <div className="error404">
          <h1 className="error-type">Error 404</h1>
          <p>Oh no, this page doesn't exist!</p>
          <Link
            to=""
            className="error-link"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Go back
          </Link>
        </div>
      </Cardstock>
    </>
  );
};

export default Error404;
