import { useState } from 'react';
import './RsvpForm.css';
import RsvpCheckboxField from './RsvpCheckboxField';
import RsvpTextField from './RsvpTextField';

const RsvpForm = ({ event, guests, rsvpField, fieldType }) => {
  const timeSliceIndex = event.time?.indexOf('#');
  const time =
    timeSliceIndex === -1 ? event.time : event.time.slice(0, timeSliceIndex);

  return (
    <div className="rsvp-formWrapper">
      <div className="rsvp-eventWrapper">
        <h2>{event.title}</h2>
        {fieldType === 'checkbox' ? (
          <>
            <p>{event.date}</p>
            <p>{time}</p>
            {/* {event.address.map((addressLine) => (
              <p key={addressLine}>{addressLine}</p>
            ))} */}
            {/* <p>{event.dressCode}</p> */}
          </>
        ) : event.title.toLowerCase() === 'address' ? (
          <p>{event.description[0]}</p>
        ) : (
          ''
        )}
      </div>
      <div className="rsvp-fieldsWrapper">
        {guests.map((guest) =>
          fieldType === 'checkbox' ? (
            <RsvpCheckboxField
              key={guest.name + rsvpField}
              initialGuest={guest}
              rsvpField={rsvpField}
            />
          ) : (
            <RsvpTextField
              key={guest.name + rsvpField}
              initialGuest={guest}
              rsvpField={rsvpField}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RsvpForm;
