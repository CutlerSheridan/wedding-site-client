import { Link, useNavigate } from 'react-router-dom';
import Cardstock from './Cardstock';
import './Home.css';
import titanicPosterPic from '../assets/engagement-pic.jpg';
import dressyPic from '../assets/dressy-pic.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const getFilename = (fullPath) => {
    const assetsIndex = fullPath.indexOf('assets');
    const filenameIndex = assetsIndex + 7;
    return fullPath.slice(filenameIndex);
  };

  return (
    <Cardstock>
      <div className="home-invitationWrapper">
        <p className="home-invitedText">You are cordially invited</p>
        {/* <p className="home-invitedText">invited</p> */}
        <p className="home-transitionText home-transitionTextPreNames">
          to the wedding of
        </p>
        <p className="home-name">Tyler Reeves</p>
        <p className="home-transitionText home-transitionTextMidNames">
          — and —
        </p>
        <p className="home-name">Cutler Sheridan</p>
        {/* <p className="home-transitionText">at</p>
        <p className="home-detailsText">4:00pm</p> */}
        <p className="home-transitionText home-transitionTextPostNames">on</p>
        <p className="home-detailsText">January 27, 2024</p>
        <p className="home-transitionText">in</p>
        <p className="home-detailsText">Los Angeles, California</p>
      </div>
      <div className="home-separator"></div>
      <p className="home-bodyText">
        Please{' '}
        <Link
          to="./rsvp"
          className="link-onWhite"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          RSVP here
        </Link>{' '}
        by December 17th.
      </p>
      <p className="home-bodyText">
        More details can be found on the{' '}
        <Link
          to="./itinerary"
          className="link-onWhite"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          full itinerary
        </Link>
        .
      </p>
      <p className="home-bodyText">
        To reserve a room from our hotel block, please see{' '}
        <Link
          to="./itinerary"
          className="link-onWhite"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          these instructions
        </Link>
        .
      </p>
      <div className="home-imgsRow">
        <div className="home-imgContainer">
          <img
            src={dressyPic}
            alt="Cutler and Tyler dressed up drinking martinis by the water"
            onClick={() => {
              console.log('dressyPic: ', dressyPic);
            }}
          />
        </div>
        <div className="home-imgContainer">
          <img
            src={titanicPosterPic}
            alt="Cutler holding Tyler in a pose recreating Jack holding Rose on the Titanic poster behind them"
            onClick={() => {
              navigate('/pictures/' + getFilename(titanicPosterPic));
            }}
          />
        </div>
      </div>
    </Cardstock>
  );
};

export default Home;
