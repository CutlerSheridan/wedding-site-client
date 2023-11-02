import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const GroupLookup = ({ guests }) => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [showError, setShowError] = useState(false);
  const groups = guests.reduce((acc, cur) => {
    if (!acc.length) {
      acc.push([cur]);
      return acc;
    }
    const groupIndex = acc.findIndex((group) => group[0].group === cur.group);
    if (groupIndex >= 0) {
      acc[groupIndex].push(cur);
    } else {
      acc.push([cur]);
    }
    return acc;
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

  const createGroupCard = (group) => {
    return (
      <div
        key={`groupCard_${group[0].group}`}
        className={`groupLookup-groupCard`}
        onClick={() => {
          navigate(group[0].group);
          window.scroll(0, 0);
        }}
      >
        {group.map((guest) => (
          <div
            key={`groupLookup_groupCard_${guest.name}`}
            onClick={(e) => {
              e.stopPropagation();
              navigate(guest.group);
              window.scroll(0, 0);
            }}
            className={`groupLookup-guestName ${
              guest.next_round ? 'groupLookup-guestName-standby' : ''
            } ${guest.declined ? 'groupLookup-guestName-declined' : ''}`}
          >
            {guest.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <form className="groupLookup-searchWrapper">
        <div className="groupLookup-searchLabel">Enter guest name:</div>
        <div className="groupLookup-searchInputAndButton">
          <input
            className="groupLookup-searchInput"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <button
          type="button"
          className="groupLookup-newGroupButton"
          onClick={() => navigate('new')}
        >
          New Group
        </button>
        <ul
          className={`groupLookup-error${
            !showError ? ' groupLookup-error-hidden' : ''
          }`}
        >
          <li>No guest found with that name</li>
        </ul>
      </form>

      <div className="groupLookup-groupList">
        {groups.map((group) => createGroupCard(group))}
      </div>
    </>
  );
};

export default GroupLookup;
