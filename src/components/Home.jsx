import { Link } from 'react-router-dom';
import Cardstock from './Cardstock';
import './Home.css';

const Home = () => {
  return (
    <Cardstock>
      <div className="home-invitationWrapper">
        <p className="home-invitedText">You are cordially invited</p>
        {/* <p className="home-invitedText">invited</p> */}
        <p className="home-transitionText">to the wedding of</p>
        <p className="home-name">Tyler Reeves</p>
        <p className="home-transitionText">and</p>
        <p className="home-name">Cutler Sheridan</p>
        <p className="home-transitionText">on</p>
        <p className="home-dateTime">January 27, 2024</p>
        <p className="home-transitionText">at</p>
        <p className="home-dateTime">4:00pm</p>
        <p className="home-transitionText">in</p>
        <p className="home-dateTime">Los Angeles, California</p>
      </div>
      <div className="home-separator"></div>
      <p className="home-bodyText">
        Please{' '}
        <Link to="./rsvp" className="link-onWhite">
          RSVP here
        </Link>{' '}
        by November 5th
      </p>
      <p className="home-bodyText"></p>
    </Cardstock>
  );
};

export default Home;
