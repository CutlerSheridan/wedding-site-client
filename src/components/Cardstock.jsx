import './Cardstock.css';
import Transitions from './Transitions';

const Cardstock = ({ children }) => {
  return (
    <div className="cardstock-outerContainer">
      <div className="cardstock-innerContainer">
        <Transitions>{children}</Transitions>
      </div>
    </div>
  );
};

export default Cardstock;
