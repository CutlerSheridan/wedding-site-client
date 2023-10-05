import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import './Photo.css';

const Photo = () => {
  const { photoPath } = useParams();
  const navigate = useNavigate();

  return (
    <div className="photo-wrapper">
      {photoPath ? (
        <div className="photo-container">
          <img
            className="photo"
            src={'/src/assets/photos/' + photoPath + '.jpg'}
            height="1800"
            width="1200"
          />
        </div>
      ) : (
        <Loading />
      )}
      <Link
        to=""
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Go back
      </Link>
      <button
        type="button"
        className="photo-backButton"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default Photo;
