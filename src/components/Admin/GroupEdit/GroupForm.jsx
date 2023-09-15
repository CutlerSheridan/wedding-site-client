import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GroupForm = ({ guests, groupId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const guestsInGroup = guests.filter((x) => x.group === groupId);

  return (
    <>
      <h1>Group Info</h1>

      <button
        type="button"
        className={`groupForm-editButton ${isEditing ? 'button-selected' : ''}`}
        onClick={() => setIsEditing(!isEditing)}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => navigate('..', { relative: 'path' })}
      >
        Back
      </button>
    </>
  );
};

export default GroupForm;
