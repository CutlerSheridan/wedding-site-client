import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <p>Oh no, this page doesn't exist!</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Error404;
