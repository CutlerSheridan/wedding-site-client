import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import GuestCard from './GuestCard';
import SERVER_URL from '../../../serverUrl';

const GroupForm = ({ jwt, guests, groupId, refreshGuests }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newGroupId] = useState(randomizeId());
  const [guestsInGroup, setGuestsInGroup] = useState(
    guests.filter((x) => x.group === groupId)
  );
  const [newGuests, setNewGuests] = useState(
    groupId === 'new' ? [_createDefaultGuest(0)] : []
  );
  const [guestsToDelete, setGuestsToDelete] = useState([]);
  const saveButton = useRef(null);
  const errorElement = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setGuestsInGroup(guests.filter((x) => x.group === groupId));
    setNewGuests(groupId === 'new' ? [_createDefaultGuest(0)] : []);
    setGuestsToDelete([]);
  }, [guests]);

  const localUpdateGuest = (guestId, updatedFieldValuePairs) => {
    // this checks if it's a new guest
    if (guestId < 100) {
      setNewGuests((prev) =>
        prev.map((x) =>
          x._id === guestId
            ? { ...x, ...updatedFieldValuePairs, used: true }
            : x
        )
      );
      return;
    }
    setGuestsInGroup((prev) =>
      prev.map((x) =>
        x._id === guestId ? { ...x, ...updatedFieldValuePairs } : x
      )
    );
  };
  const localDeleteGuest = (guestId) => {
    const guestToDelete = guestsInGroup.find((x) => x._id === guestId);
    setGuestsInGroup((prev) => prev.filter((x) => x._id !== guestId));
    setGuestsToDelete((prev) => [...prev, guestToDelete]);
  };

  const saveUpdatesToDb = async () => {
    if (
      guestsInGroup.some((x) => !x.name) ||
      newGuests.some((x) => x.used && !x.name)
    ) {
      errorElement.current.classList.remove('groupForm-error-hidden');
      return;
    }
    errorElement.current.classList.add('groupForm-error-hidden');
    saveButton.current.classList.add('button-selected');
    const usedNewGuests = newGuests.filter((x) => x.used);

    try {
      await Promise.all([
        ...guestsInGroup.map(saveGuestUpdateToDb),
        saveNewGuestsToDb(usedNewGuests),
        ...guestsToDelete.map(deleteGuestFromDb),
      ]);
    } catch (err) {
      console.log(err);
    }

    saveButton.current.classList.remove('button-selected');
    if (groupId === 'new' && usedNewGuests.length) {
      navigate(`../${usedNewGuests[0].group}`, { relative: 'path' });
    }
    refreshGuests();
  };
  const saveGuestUpdateToDb = (payload) => {
    return fetch(`${SERVER_URL}/api/1/guests/${payload._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };
  const saveNewGuestsToDb = (newGuests) => {
    if (newGuests.length) {
      const guestsWithoutIds = newGuests.map((x) => {
        delete x._id;
        return x;
      });
      return fetch(`${SERVER_URL}/api/1/guests`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(guestsWithoutIds),
      });
    }
  };
  const deleteGuestFromDb = (guest) => {
    return fetch(`${SERVER_URL}/api/1/guests/${guest._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  };

  const addNewGuest = () => {
    setNewGuests((prev) => [...prev, _createDefaultGuest(newGuests.length)]);
  };
  const removeNewGuest = (guestId) => {
    setNewGuests((prev) => prev.filter((x) => x._id !== guestId));
  };

  function _createDefaultGuest(id) {
    return {
      used: false,
      _id: id,
      family: guestsInGroup[0]?.family ?? false,
      group: groupId !== 'new' ? groupId : newGroupId,
      declined: false,
      sent_savedate: false,
      sent_invite: false,
      next_round: false,
      ready_to_send: false,
      sent_character: false,
    };
  }

  return (
    <>
      <div>SAVE any changes!</div>

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
        <button type="button" ref={saveButton} onClick={saveUpdatesToDb}>
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
              handleDelete={localDeleteGuest}
            />
            <div className="groupForm-guestSeparator"></div>
          </div>
        ))}

        {newGuests.map((x, index) => (
          <div key={`guestCard_new_${index}`}>
            <GuestCard
              guest={x}
              guests={guests}
              isEditing={isEditing}
              newGroupId={newGroupId}
              localUpdateGuest={localUpdateGuest}
              handleDelete={removeNewGuest}
            />
            <div className="groupForm-guestSeparator"></div>
          </div>
        ))}
        <button type="button" onClick={addNewGuest}>
          +
        </button>
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
