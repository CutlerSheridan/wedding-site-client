import { useState, useRef } from 'react';
import SERVER_URL from '../../serverUrl';

const RsvpCheckboxField = ({ initialGuest, rsvpField }) => {
  const [guest, setGuest] = useState({ ...initialGuest });
  const acceptButton = useRef(null);
  const declineButton = useRef(null);

  const handleButton = async (button) => {
    acceptButton.current.classList.add('rsvp-button-disabled');
    declineButton.current.classList.add('rsvp-button-disabled');

    let resData;
    if (
      guest[rsvpField] === null ||
      guest[rsvpField] !== (button.current.dataset.bool === 'true')
    ) {
      const response = await fetch(`${SERVER_URL}/api/1/guests/${guest._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          [rsvpField]: button.current.dataset.bool === 'true',
        }),
      });
      resData = await response.json();
    } else {
      const response = await fetch(`${SERVER_URL}/api/1/guests/${guest._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ [rsvpField]: null }),
      });
      resData = await response.json();
    }
    setGuest({ ...resData });
    acceptButton.current.classList.remove('rsvp-button-disabled');
    declineButton.current.classList.remove('rsvp-button-disabled');
  };

  return (
    <div className="rsvp-inputGrouping">
      <h2 className="rsvp-guestName">{guest.name}</h2>
      <div className="rsvp-buttonsWrapper">
        <button
          type="button"
          ref={acceptButton}
          className={`rsvp-button ${
            guest[rsvpField] ? 'button-selected' : null
          } rsvp-checkbox`}
          onClick={() => {
            handleButton(acceptButton);
          }}
          data-bool="true"
        >
          Yes
        </button>
        <button
          type="button"
          ref={declineButton}
          className={`rsvp-button ${
            guest[rsvpField] === false ? 'button-selected' : null
          } rsvp-checkbox`}
          onClick={() => {
            handleButton(declineButton);
          }}
          data-bool="false"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default RsvpCheckboxField;
