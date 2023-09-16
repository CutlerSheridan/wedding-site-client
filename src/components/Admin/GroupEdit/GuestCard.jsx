import { useState } from 'react';
import './GuestCard.css';
import Table from '../Table';

const GuestCard = ({
  guest,
  guests: allGuests,
  isEditing,
  saveEdits,
  newGroupId,
}) => {
  const [localGuest, setLocalGuest] = useState({ ...guest });

  const familyNames = ['Cutler', 'Tyler', 'None'];
  const familyValues = ['cutler', 'tyler', false];
  const abcGuests = [...allGuests];
  abcGuests.sort((x, y) => x.name.localeCompare(y.name));
  const abcGuestNames = abcGuests.map((x) => x.name);
  abcGuestNames.unshift('New Group');
  const groupIdsArray = abcGuests.map((x) => x.group);
  groupIdsArray.unshift(newGroupId);

  const localUpdateGuest = (newFieldValue) => {
    setLocalGuest((prev) => ({ ...prev, ...newFieldValue }));
  };
  const localUpdateGuestForTable = (unusedId, newFieldValue) => {
    setLocalGuest((prev) => ({ ...prev, ...newFieldValue }));
  };

  const createShortTextInput = (field, label, value, handleChange) => {
    return (
      <div
        className={`input-grouping ${
          field === 'name' ? 'input-nameGroup' : ''
        }`}
      >
        <div className="input-label">{label}:</div>
        {isEditing ? (
          <input
            onChange={(e) => handleChange({ [field]: e.target.value })}
            value={value}
          />
        ) : (
          <div
            className={`input-displayText ${
              field === 'name' ? 'input-displayEmphasis' : ''
            }`}
          >
            {value}
          </div>
        )}
      </div>
    );
  };

  const createSelector = (
    field,
    label,
    value,
    handleChange,
    optionLabels,
    optionValues
  ) => {
    return (
      <div className="input-grouping">
        <div className="input-label">{label}:</div>
        {isEditing ? (
          <select
            value={value}
            onChange={(e) => handleChange({ [field]: e.target.value })}
          >
            {optionLabels.map((x, index) => (
              <option key={x} value={optionValues[index]}>
                {x}
              </option>
            ))}
          </select>
        ) : (
          <div className="input-displayText">
            {!value ? 'None' : optionLabels[optionValues.indexOf(value)]}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="guestCard">
      <div className="guestCard-gridCell">
        {createShortTextInput(
          'name',
          'Name',
          localGuest.name,
          localUpdateGuest
        )}
      </div>
      <div className="guestCard-gridCell">
        <Table
          guests={[localGuest]}
          tableType="soloGuest"
          isEditing={isEditing}
          longestName={localGuest.name}
          handleEdits={localUpdateGuestForTable}
        />
      </div>
      <div className="guestCard-gridCell">
        {createSelector(
          'family',
          'Family',
          localGuest.family,
          localUpdateGuest,
          familyNames,
          familyValues
        )}
        {createSelector(
          'group',
          'Group',
          localGuest.group,
          localUpdateGuest,
          abcGuestNames,
          groupIdsArray
        )}
      </div>
    </div>
  );
};

export default GuestCard;
