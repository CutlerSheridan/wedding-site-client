import { useState } from 'react';
import './RsvpForm.css';
import RsvpCheckboxField from './RsvpCheckboxField';

const RsvpForm = ({ event, guests, rsvpField }) => {
  const timeSliceIndex = event.time.indexOf('#');
  const time =
    timeSliceIndex === -1 ? event.time : event.time.slice(0, timeSliceIndex);

  return (
    <div className="rsvp-formWrapper">
      <div className="rsvp-eventWrapper">
        <h2>{event.title}</h2>
        <p>{event.date}</p>
        <p>{time}</p>
        {event.address.map((addressLine) => (
          <p key={addressLine}>{addressLine}</p>
        ))}
        <ul>{event.description[0]}</ul>
      </div>
      <div className="rsvp-fieldsWrapper">
        {guests.map((guest) => (
          <RsvpCheckboxField
            key={guest.name}
            initialGuest={guest}
            rsvpField={rsvpField}
            fieldType="checkbox"
          />
        ))}
      </div>
    </div>
  );
};

export default RsvpForm;
