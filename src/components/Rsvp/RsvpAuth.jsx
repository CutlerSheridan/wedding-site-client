import { useState, seEffect, useRef } from 'react';
import SERVER_URL from '../../serverUrl';
import './RsvpForm.css';

const RsvpAuth = ({ setGuestsInGroup, setGroupId }) => {
  const [inputName, setInputName] = useState('');
  const [errors, setErrors] = useState([]);
  const submitButton = useRef(null);

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const submitName = async (e) => {
    e.preventDefault();
    submitButton.current.disabled = true;
    const nameUri = inputName.replace(' ', '_');
    const guests = await searchName(nameUri);

    if (Array.isArray(guests)) {
      setErrors([]);
      setGuestsInGroup(guests);
      setGroupId(guests[0].group);
      localStorage.setItem('groupId', guests[0].group);
    } else if (!guests) {
      submitButton.current.disabled = false;
      setErrors(['No guests found with that name']);
    } else {
      submitButton.current.disabled = false;
      setErrors([`guests`]);
    }
  };
  const searchName = async (nameUri) => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/1/groups/search?name=${nameUri}`
      );
      const guests = await response.json();
      return guests;
    } catch (err) {
      return `Error: ${err}`;
    }
  };

  return (
    <>
      <p className="rsvpAuth-instructions">
        Enter the first and last name of one member of your party below. You
        will be able to RSVP for your entire group on the next page.
      </p>
      <form className="rsvpAuth-inputAndButtonWrapper">
        <input
          className="rsvpAuth-nameInput"
          value={inputName}
          onChange={handleNameChange}
          placeholder='Ex. "John Smith"'
        />
        <button
          ref={submitButton}
          className="rsvpAuth-submitButton"
          onClick={submitName}
          disabled={!inputName}
        >
          Submit
        </button>
      </form>
      <ul>
        {errors.map((x, index) => (
          <li className="rsvpAuth-error" key={x}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RsvpAuth;
