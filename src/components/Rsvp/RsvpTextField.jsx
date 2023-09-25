import { useState, useRef } from 'react';
import SERVER_URL from '../../serverUrl';

const RsvpTextField = ({ initialGuest, rsvpField }) => {
  const [guest, setGuest] = useState({ ...initialGuest });
  const [inputText, setInputText] = useState(
    initialGuest[rsvpField] || undefined
  );
  const saveButton = useRef(null);

  const handleButton = async (e) => {
    e.preventDefault();
    saveButton.current.classList.add('rsvp-button-disabled');
    const response = await fetch(`${SERVER_URL}/api/1/guests/${guest._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ [rsvpField]: inputText }),
    });
    const resData = await response.json();
    setGuest({ ...resData });
    saveButton.current.classList.remove('rsvp-button-disabled');
  };

  return (
    <div className="rsvp-inputGrouping">
      <h2 className="rsvp-guestName">{guest.name}</h2>
      <form className="rsvp-addressAndButtonWrapper">
        <textarea
          className="rsvp-inputAddress"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          type="button"
          className="rsvp-button"
          ref={saveButton}
          onClick={handleButton}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default RsvpTextField;
