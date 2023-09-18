import { useState } from 'react';
import './GuestCard.css';
import Table from '../Table';
import ShortTextInput from '../../Inputs/ShortTextInput';
import Selector from '../../Inputs/Selector';

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

  return (
    <div className="guestCard">
      <div className="guestCard-gridCell">
        <ShortTextInput
          field="name"
          label="Name"
          value={localGuest.name}
          handleChange={localUpdateGuest}
          isEditing={isEditing}
        />
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
        <Selector
          field="family"
          label="Family"
          value={localGuest.family}
          handleChange={localUpdateGuest}
          optionLabels={familyNames}
          optionValues={familyValues}
          isEditing={isEditing}
        />
        <Selector
          field="group"
          label="Family"
          value={localGuest.group}
          handleChange={localUpdateGuest}
          optionLabels={abcGuestNames}
          optionValues={groupIdsArray}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
};

export default GuestCard;
