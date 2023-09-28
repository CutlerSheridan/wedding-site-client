import './Cardstock.css';

const Cardstock = ({ children }) => {
  return (
    <div className="cardstock-outerContainer">
      <div className="cardstock-innerContainer">{children}</div>
    </div>
  );
};

export default Cardstock;
