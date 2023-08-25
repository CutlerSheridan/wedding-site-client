import { useState, useRef } from 'react';

const RsvpTextField = ({ initialGuest, rsvpField }) => {
  const [guest, setGuest] = useState({ ...initialGuest });
  const [inputText, setInputText] = useState(
    initialGuest[rsvpField] || undefined
  );
  const saveButton = useRef(null);

  const handleButton = async (e) => {
    e.preventDefault();
    saveButton.current.classList.add('rsvp-button-disabled');
    const response = await fetch(
      `http://localhost:3000/api/1/guests/${guest._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ [rsvpField]: inputText }),
      }
    );
    const resData = await response.json();
    setGuest({ ...resData });
    saveButton.current.classList.remove('rsvp-button-disabled');
  };

  return (
    <div className="rsvpSelector-wrapper">
      <h2>{guest.name}</h2>
      <form>
        <textarea
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
