import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GuestCard from './GuestCard';

const GroupForm = ({ guests, groupId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const guestsInGroup = guests.filter((x) => x.group === groupId);

  const [newGroupId] = useState(randomizeId());

  return (
    <>
      <h1>Group Info</h1>

      <div className="groupForm-controls">
        <button
          type="button"
          className={`groupForm-editButton ${
            isEditing ? 'button-selected' : ''
          }`}
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
        <button type="button">Save</button>
        <button
          type="button"
          onClick={() => navigate('..', { relative: 'path' })}
        >
          Back
        </button>
      </div>

      <div className="groupForm-guestsWrapper">
        {guestsInGroup.map((x) => (
          <div key={`groupCard_${x.name}`}>
            <GuestCard
              guest={x}
              guests={guests}
              isEditing={isEditing}
              newGroupId={newGroupId}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupForm;

const randomizeId = () => {
  let _charOptions = 'abcdefghijklmnopqrstuvwxyz';
  _charOptions += _charOptions.toUpperCase();
  _charOptions += '0123456789';
  let randomId = '';
  for (let i = 0; i < 24; i++) {
    const randomIndex = Math.floor(
      (Math.random() * 100 * _charOptions.length) / 100
    );
    randomId += _charOptions.charAt(randomIndex);
  }
  return randomId;
};
