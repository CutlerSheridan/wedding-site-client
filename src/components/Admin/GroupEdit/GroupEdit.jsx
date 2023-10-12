import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Loading from '../../Loading';
import SERVER_URL from '../../../serverUrl';
import './GroupEdit.css';
import GroupLookup from './GroupLookup';
import GroupForm from './GroupForm';
import Cardstock from '../../Cardstock';

const GroupEdit = () => {
  const { jwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const [needsRefresh, setNeedsRefresh] = useState(true);
  const { groupId } = useParams();
  const isLoading = guests.length === 0;

  useEffect(() => {
    if (needsRefresh) {
      const fetchGuests = async () => {
        const response = await fetch(`${SERVER_URL}/api/1/guests`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        const parsedResponse = await response.json();
        setGuests(parsedResponse.guests);
        setNeedsRefresh(false);
      };

      fetchGuests();
    }
  }, [needsRefresh]);

  const refreshGuests = () => {
    setNeedsRefresh(true);
  };

  return (
    <Cardstock>
      {isLoading ? (
        <Loading />
      ) : groupId ? (
        <GroupForm
          jwt={jwt}
          guests={guests}
          groupId={groupId}
          refreshGuests={refreshGuests}
        />
      ) : (
        <GroupLookup guests={guests} />
      )}
    </Cardstock>
  );
};

export default GroupEdit;
