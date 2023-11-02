import { Helmet } from 'react-helmet';
import Cardstock from './Cardstock';
import './Registry.css';

const Registry = () => {
  return (
    <Cardstock>
      <Helmet>
        <title>Registry</title>
        <meta
          name="description"
          content="Tyler and Cutler's wedding registry."
        />
      </Helmet>
      <div className="registry-wrapper">
        <p className="registry-text">
          In light of the expenses most of you will incur traveling to Los
          Angeles and following the dress code, there is no need to buy us any
          gifts.
        </p>
        <p className="registry-text">Seeing you will be gift enough!</p>
      </div>
    </Cardstock>
  );
};

export default Registry;
