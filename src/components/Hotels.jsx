import Cardstock from './Cardstock';
import hotelPic from '../assets/photos/hotel-room.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './Hotels.css';

const Hotels = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hotel-imgContainer">
        <img
          className="hotel-img"
          src={hotelPic}
          onClick={() => {
            navigate('/pictures/hotel-room');
          }}
          alt="A hotel room with a view of the marina"
          height="800"
          width="800"
        />
      </div>
      <Cardstock>
        <h2 className="hotel-name">Hotel Portofino</h2>
        <p className="hotel-address">260 Portofino Way</p>
        <p className="hotel-address">Redondo Beach, CA 90277</p>
        <div className="hotel-infoGroup">
          <p className="hotel-infoLabel">Block dates:</p>
          <p className="hotel-info">January 26 – 28, 2024</p>
          <p className="hotel-infoDescription">
            The hotel will attempt to accomodate additional nights at the same
            discounted price.
          </p>
        </div>
        <div className="hotel-infoGroup">
          <p className="hotel-infoLabel">Booking deadline:</p>
          <p className="hotel-info">December 27, 2023</p>
          <p className="hotel-infoDescription">
            Be aware, the hotel is not guaranteed to have availability this
            late.
          </p>
        </div>
        <div className="hotel-infoGroup">
          {/* <p className="hotel-infoLabel">To Book:</p> */}
          <p className="hotel-info">Booking options</p>
          <ul className="hotel-list">
            <li className="hotel-infoListItem">
              Book directly through{' '}
              <Link
                to="https://be.synxis.com/?Hotel=29023&Chain=11910&arrive=2024-01-26&depart=2024-01-28&adult=1&child=0&group=7142402"
                className="link-onWhite"
              >
                this link
              </Link>
            </li>
            <li className="hotel-infoListItem">
              Use <span className="hotel-infoEmphasis">code 7142402</span> on
              the{' '}
              <Link
                to="https://www.hotelportofino.com/"
                className="link-onWhite"
              >
                Portofino Website
              </Link>
            </li>
            <li className="hotel-infoListItem">
              Call{' '}
              <Link to="tel:3104214195" className="link-onWhite">
                310 421 4195
              </Link>{' '}
              and <span className="hotel-infoEmphasis">press 5</span>; ask for a
              room in the Reeves/Sheridan wedding block
            </li>
          </ul>
          <p className="hotel-infoDescription">
            If the block is out of rooms or does not have the type of room you
            want, try calling and asking for{' '}
            <span className="hotel-infoEmphasis">Akira Starks</span>. If she is
            unavailable, ask for{' '}
            <span className="hotel-infoEmphasis">Rain Villanueva</span>. One of
            them will try to help you.
          </p>
          <p className="hotel-infoDescription"></p>
        </div>
        <div className="hotel-infoGroup">
          <p className="hotel-infoLabel"></p>
          <p className="hotel-info"></p>
          <p className="hotel-infoDescription"></p>
        </div>
      </Cardstock>
    </>
  );
};

export default Hotels;
