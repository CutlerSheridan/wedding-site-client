import { useState } from 'react';
import './GuestCard.css';

const GuestCard = ({ guest, guests: allGuests, isEditing, saveEdits }) => {
  const [localGuest, setLocalGuest] = useState({ ...guest });

  const localUpdateOneField = (field, newValue) => {
    setLocalGuest((prev) => ({ ...prev, [field]: newValue }));
  };

  const createSmallTextInput = (field, label, value, handleChange) => {
    if (isEditing) {
    }
    return (
      <div className="inputText-group">
        <div>{label}:</div>
        {isEditing ? (
          <input
            onChange={(e) => handleChange(field, e.target.value)}
            value={value}
          />
        ) : (
          <div>{value}</div>
        )}
      </div>
    );
  };

  return (
    <div className="guestCard">
      <div className="guestCard-gridCell">
        {createSmallTextInput(
          'name',
          'Name',
          localGuest.name,
          localUpdateOneField
        )}
      </div>
    </div>
  );
};

export default GuestCard;
