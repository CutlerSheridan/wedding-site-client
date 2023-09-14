import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GroupLookup = ({ guests }) => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [showError, setShowError] = useState(false);
  const groups = guests.reduce((acc, cur) => {
    const accCopy = [...acc];
    if (!accCopy.length) {
      accCopy.push([cur]);
    } else {
      const lastIndex = accCopy.length - 1;
      if (accCopy[lastIndex][0].group === cur.group) {
        accCopy[lastIndex].push(cur);
      } else {
        accCopy.push([cur]);
      }
    }
    return accCopy;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObject = guests.find(
      (x) => inputName.toLowerCase() === x.name.toLowerCase()
    );
    if (!userObject) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      navigate(userObject.group);
    }
  };

  return (
    <>
      <h1>Group Lookup</h1>
      <form className="groupLookup-searchWrapper">
        <div className="groupLookup-searchInputAndButton">
          <input
            className="groupLookup-searchInput"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <ul
          className={`groupLookup-error${
            !showError ? ' groupLookup-error-hidden' : ''
          }`}
        >
          <li>No guest found with that name</li>
        </ul>
      </form>
    </>
  );
};

export default GroupLookup;
