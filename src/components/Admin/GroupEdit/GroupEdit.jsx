import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Loading from '../../Loading';
import SERVER_URL from '../../../serverUrl';
import './GroupEdit.css';
import GroupLookup from './GroupLookup';
import GroupForm from './GroupForm';

const GroupEdit = () => {
  const { jwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const { groupId } = useParams();
  const isLoading = guests.length === 0;

  useEffect(() => {
    const fetchGuests = async () => {
      const response = await fetch(`${SERVER_URL}/api/1/guests`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const parsedResponse = await response.json();
      setGuests(parsedResponse.guests);
    };

    fetchGuests();
  }, []);

  const handleEdit = async (guestId, fieldName, newValue) => {
    const payload = { [fieldName]: newValue };
    console.log('payload: ', payload);
    const response = await fetch(`${SERVER_URL}/api/1/guests/${guestId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    updateGuestsLocally(parsedResponse);
  };
  const updateGuestsLocally = (updatedGuest) => {
    const updatedGuestList = guests.map((x) =>
      x._id === updatedGuest._id ? updatedGuest : { ...x }
    );
    setGuests(updatedGuestList);
  };

  return (
    <div className="group-pageWrapper">
      {isLoading ? (
        <Loading />
      ) : groupId ? (
        <GroupForm guests={guests} groupId={groupId} />
      ) : (
        <GroupLookup guests={guests} />
      )}
    </div>
  );
};

export default GroupEdit;
