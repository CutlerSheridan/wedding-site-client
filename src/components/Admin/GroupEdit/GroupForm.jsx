import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import GuestCard from './GuestCard';
import SERVER_URL from '../../../serverUrl';

const GroupForm = ({ guests, groupId, updateGuestsLocally }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newGroupId] = useState(randomizeId());
  const [guestsInGroup, setGuestsInGroup] = useState(
    guests.filter((x) => x.group === groupId)
  );
  const saveButton = useRef(null);
  const errorElement = useRef(null);
  const navigate = useNavigate();

  const localUpdateGuest = (guestId, updatedFieldValuePairs) => {
    setGuestsInGroup((prev) =>
      prev.map((x) =>
        x._id === guestId ? { ...x, ...updatedFieldValuePairs } : x
      )
    );
  };
  const saveGuests = async () => {
    if (guestsInGroup.some((x) => !x.name)) {
      errorElement.current.classList.remove('groupForm-error-hidden');
      return;
    }
    errorElement.current.classList.add('groupForm-error-hidden');
    saveButton.current.classList.add('button-selected');
    updateGuestsLocally(guestsInGroup);

    await Promise.all(
      guestsInGroup.map(async (guest) => {
        await saveOneGuest(guest._id, guest);
      })
    );

    saveButton.current.classList.remove('button-selected');
  };
  const saveOneGuest = (guestId, payload) => {
    return fetch(`${SERVER_URL}/api/1/guests/${guestId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };

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
        <button type="button" ref={saveButton} onClick={saveGuests}>
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate('..', { relative: 'path' })}
        >
          Back
        </button>
      </div>
      <div
        ref={errorElement}
        className="groupForm-error groupForm-error-hidden"
      >
        Make sure every guest has a name
      </div>

      <div className="groupForm-guestsWrapper">
        {guestsInGroup.map((x, index) => (
          <div key={`guestCard_${x._id}`}>
            <GuestCard
              guest={x}
              guests={guests}
              isEditing={isEditing}
              newGroupId={newGroupId}
              localUpdateGuest={localUpdateGuest}
            />
            {index < guestsInGroup.length - 1 ? (
              <div className="groupForm-guestSeparator"></div>
            ) : null}
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
