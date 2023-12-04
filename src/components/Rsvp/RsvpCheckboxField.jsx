import { useState, useRef } from 'react';
import SERVER_URL from '../../serverUrl';

const RsvpCheckboxField = ({ initialGuest, rsvpField }) => {
  const [guest, setGuest] = useState({ ...initialGuest });
  const acceptButton = useRef(null);
  const declineButton = useRef(null);
  const rsvpConfirmation = useRef(null);

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
    rsvpConfirmation.current.addEventListener('animationend', () => {
      rsvpConfirmation.current.classList.remove('rsvp-confirmation-animate');
    });
    rsvpConfirmation.current.classList.add('rsvp-confirmation-animate');
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
          YES
        </button>
        <button
          type="button"
          ref={declineButton}
          className={`rsvp-button ${
            guest[rsvpField] === false || guest.declined
              ? 'button-selected'
              : null
          } rsvp-checkbox`}
          onClick={() => {
            handleButton(declineButton);
          }}
          data-bool="false"
        >
          NO
        </button>
        <div ref={rsvpConfirmation} className={`rsvp-confirmation`}>
          ✓
        </div>
      </div>
    </div>
  );
};

export default RsvpCheckboxField;
