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
