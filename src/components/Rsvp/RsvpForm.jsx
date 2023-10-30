import { useState } from 'react';
import './RsvpForm.css';
import RsvpCheckboxField from './RsvpCheckboxField';
import RsvpTextField from './RsvpTextField';

const RsvpForm = ({ event, guests, rsvpField, fieldType }) => {
  const timeSliceIndex = event.time?.indexOf('#');
  const time =
    timeSliceIndex === -1 ? event.time : event.time.slice(0, timeSliceIndex);

  return (
    <div
      className={`rsvp-formWrapper ${
        fieldType !== 'checkbox' ? 'rsvp-formWrapper-address' : ''
      }`}
    >
      <div className="rsvp-eventWrapper">
        <div className="rsvp-infoGrouping">
          <p className="rsvp-infoLabel">Event:</p>
          <h2 className="rsvp-infoDetail">{event.title}</h2>
        </div>
        {fieldType === 'checkbox' ? (
          <>
            <div className="rsvp-infoGrouping">
              <p className="rsvp-infoLabel">Date:</p>
              <p className="rsvp-infoDetail">{event.date}</p>
            </div>
            <div className="rsvp-dayTimeWrapper">
              <div className="rsvp-infoGrouping">
                <p className="rsvp-infoLabel">Day:</p>
                <p className="rsvp-infoDetail">{event.day}</p>
              </div>
              <div className="rsvp-infoGrouping">
                <p className="rsvp-infoLabel">Time:</p>
                <p className="rsvp-infoDetail">{time}</p>
              </div>
            </div>
          </>
        ) : event.title.toLowerCase() === 'address' ? (
          <div className="rsvp-infoGrouping">
            <p className="rsvp-infoLabel">Instructions:</p>
            <p className="rsvp-infoDetail rsvp-addressInstructions">
              {event.description[0]}
            </p>
          </div>
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
