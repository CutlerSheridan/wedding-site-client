import { Link, useNavigate } from 'react-router-dom';
import Cardstock from './Cardstock';
import './Home.css';
import { Helmet } from 'react-helmet';
import pics from '../imageObjects';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Cardstock>
      <Helmet>
        <title>Cutler & Tyler's Wedding</title>
        <meta
          name="description"
          content="Your invitation to the wedding of Cutler Sheridan and Tyler Reeves."
        />
      </Helmet>
      <div className="home-invitationWrapper">
        <p className="home-invitedText">You are cordially invited</p>
        <p className="home-transitionText home-transitionTextPreNames">
          to the wedding of
        </p>
        <p className="home-name">Tyler Reeves</p>
        <p className="home-transitionText home-transitionTextMidNames">
          — and —
        </p>
        <p className="home-name">Cutler Sheridan</p>
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
        To reserve a room from our hotel block, follow{' '}
        <Link
          to="./hotel"
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
          <Link
            to=""
            className="home-pictureLink"
            onClick={() => {
              navigate('/pictures/engagement-pic');
              window.scroll(0, 0);
            }}
          ></Link>
          <img
            src={pics.engagementpic}
            alt="Cutler holding Tyler in a pose recreating Jack holding Rose on the Titanic poster behind them"
          />
        </div>
        <div className="home-imgContainer">
          <Link
            to=""
            className="home-pictureLink"
            onClick={() => {
              navigate('/pictures/dressy-pic');
              window.scroll(0, 0);
            }}
          ></Link>
          <img
            src={pics.dressypic}
            alt="Cutler and Tyler dressed up drinking martinis by the water"
          />
        </div>
      </div>
    </Cardstock>
  );
};

export default Home;
