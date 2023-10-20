import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import './Photo.css';
import Transitions from './Transitions';

const Photo = () => {
  const { photoPath } = useParams();
  const navigate = useNavigate();

  return (
    <Transitions>
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
      </div>
    </Transitions>
  );
};

export default Photo;
