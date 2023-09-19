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

  // payload should be {field: value, field2: value2}
  // const saveGuestEdits = async (guestId, payload) => {
  //   console.log('payload: ', payload);
  //   const response = await fetch(`${SERVER_URL}/api/1/guests/${guestId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //   const parsedResponse = await response.json();
  //   console.log(parsedResponse);
  //   updateGuestsLocally([parsedResponse]);
  // };
  const updateGuestsLocally = (updatedGroup) => {
    const updatedGuests = [...guests];
    updatedGroup.forEach((guest) => {
      const guestIndex = updatedGuests.findIndex((x) => x._id === guest._id);
      if (guestIndex > -1) {
        updatedGuests[guestIndex] = guest;
      } else {
        updatedGuests.push(guest);
      }
      setGuests(updatedGuests);
    });
  };

  return (
    <div className="group-pageWrapper">
      {isLoading ? (
        <Loading />
      ) : groupId ? (
        <GroupForm
          jwt={jwt}
          guests={guests}
          groupId={groupId}
          updateGuestsLocally={updateGuestsLocally}
        />
      ) : (
        <GroupLookup guests={guests} />
      )}
    </div>
  );
};

export default GroupEdit;
