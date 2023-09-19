import { useState } from 'react';
import './GuestCard.css';
import Table from '../Table';
import ShortTextInput from '../../Inputs/ShortTextInput';
import Selector from '../../Inputs/Selector';
import TextareaInput from '../../Inputs/TextareaInput';

const GuestCard = ({
  guest,
  guests: allGuests,
  isEditing,
  localUpdateGuest,
  newGroupId,
}) => {
  const familyNames = ['Cutler', 'Tyler', 'None'];
  const familyValues = ['cutler', 'tyler', false];
  const abcGuests = [...allGuests];
  abcGuests.sort((x, y) => x.name.localeCompare(y.name));
  const abcGuestNames = abcGuests.map((x) => x.name);
  abcGuestNames.unshift('New Group');
  const groupIdsArray = abcGuests.map((x) => x.group);
  groupIdsArray.unshift(newGroupId);

  const localUpdateGuestAddId = (newFieldValue) => {
    localUpdateGuest(guest._id, newFieldValue);
  };

  return (
    <div className="guestCard">
      <div className="guestCard-gridCell">
        <ShortTextInput
          field="name"
          value={guest.name}
          handleChange={localUpdateGuestAddId}
          isEditing={isEditing}
        />
        <div className="guestCard-horizontalFields">
          <Selector
            field="family"
            value={guest.family}
            handleChange={localUpdateGuestAddId}
            optionLabels={familyNames}
            optionValues={familyValues}
            isEditing={isEditing}
          />
          <Selector
            field="group"
            value={guest.group}
            handleChange={localUpdateGuestAddId}
            optionLabels={abcGuestNames}
            optionValues={groupIdsArray}
            isEditing={isEditing}
          />
        </div>
        <Selector
          field="character"
          value={guest.character}
          handleChange={localUpdateGuestAddId}
          optionLabels={[]}
          optionValues={[]}
          isEditing={isEditing}
        />
      </div>
      <div className="guestCard-gridCell">
        <Table
          guests={[guest]}
          tableType="soloGuest"
          isEditing={isEditing}
          longestName={guest.name ?? ''}
          handleEdits={localUpdateGuest}
        />
      </div>
      <div className="guestCard-gridCell">
        <TextareaInput
          field="address"
          value={guest.address}
          handleChange={localUpdateGuestAddId}
          isEditing={isEditing}
        />
      </div>
      <div className="guestCard-gridCell">
        <TextareaInput
          field="notes"
          value={guest.notes}
          handleChange={localUpdateGuestAddId}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
};

export default GuestCard;
