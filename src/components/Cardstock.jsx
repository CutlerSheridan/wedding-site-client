import './Cardstock.css';
import Transitions from './Transitions';

const Cardstock = ({ children }) => {
  return (
    <div className="cardstock-wrapper">
      <div className="cardstock-outerContainer">
        <div className="cardstock-innerContainer">
          <Transitions>{children}</Transitions>
        </div>
      </div>
    </div>
  );
};

export default Cardstock;
