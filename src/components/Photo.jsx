import { Link, useParams } from 'react-router-dom';
import './Photo.css';

const Photo = () => {
  const { photoPath } = useParams();

  return (
    <div className="photo-wrapper">
      <div className="photo-container">
        <img className="photo" src={'/src/assets/' + photoPath} />
      </div>
      <Link to="..">Go back</Link>
    </div>
  );
};

export default Photo;
