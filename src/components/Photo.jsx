import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import './Photo.css';

const Photo = () => {
  const { photoPath } = useParams();

  return (
    <div className="photo-wrapper">
      {photoPath ? (
        <div className="photo-container">
          <img
            className="photo"
            src={'/src/assets/photos/' + photoPath + '.jpg'}
            height="500"
            width="800"
          />
        </div>
      ) : (
        <Loading />
      )}
      <Link to="..">Go back</Link>
    </div>
  );
};

export default Photo;
