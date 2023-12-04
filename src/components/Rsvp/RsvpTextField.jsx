import { useState, useEffect, useRef } from 'react';
import SERVER_URL from '../../serverUrl';

const RsvpTextField = ({ initialGuest, rsvpField }) => {
  const [guest, setGuest] = useState({ ...initialGuest });
  const [inputText, setInputText] = useState(
    initialGuest[rsvpField] || undefined
  );
  const [saveIsDisabled, setSaveIsDisabled] = useState(true);
  const saveButton = useRef(null);
  const rsvpConfirmation = useRef(null);

  useEffect(() => {
    if (inputText == guest.address || (!inputText && !guest.address)) {
      setSaveIsDisabled(true);
    } else {
      setSaveIsDisabled(false);
    }
  }, [inputText]);

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
    setSaveIsDisabled(true);
    rsvpConfirmation.current.addEventListener('animationend', () => {
      rsvpConfirmation.current.classList.remove('rsvp-confirmation-animate');
    });
    rsvpConfirmation.current.classList.add('rsvp-confirmation-animate');
  };

  return (
    <div className="rsvp-inputGrouping rsvp-textGrouping">
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
          className="rsvp-button rsvp-saveButton"
          ref={saveButton}
          onClick={handleButton}
          disabled={saveIsDisabled}
        >
          Save
          <div ref={rsvpConfirmation} className={`rsvp-confirmation`}>
            ✓
          </div>
        </button>
      </form>
    </div>
  );
};

export default RsvpTextField;
