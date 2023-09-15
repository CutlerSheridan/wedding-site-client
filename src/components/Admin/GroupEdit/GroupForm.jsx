import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GuestCard from './GuestCard';

const GroupForm = ({ guests, groupId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const guestsInGroup = guests.filter((x) => x.group === groupId);

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
            <GuestCard guest={x} guests={guests} isEditing={isEditing} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupForm;
