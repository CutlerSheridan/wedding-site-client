import { useState } from 'react';

const RsvpCheckboxField = (props) => {
  const [guest, setGuest] = useState({ ...props.guest });

  return (
    <div className="rsvpSelector-wrapper">
      <h2>{guest.name}</h2>
      <p>Checkbox for {props.rsvpField} [_] [_]</p>
    </div>
  );
};

export default RsvpCheckboxField;
