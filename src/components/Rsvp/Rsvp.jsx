import { useState, useEffect } from 'react';
import RsvpAuth from './RsvpAuth';
import RsvpForm from './RsvpForm';
import Loading from '../Loading';

const Rsvp = () => {
  const [groupId, setGroupId] = useState(localStorage.getItem('groupId'));
  const [guestsInGroup, setGuestsInGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuestsFromGroupId = async () => {
      const response = await fetch(
        `http://localhost:3000/api/1/groups/${groupId}`
      );
      const guests = await response.json();
      if (!!guests) {
        setGuestsInGroup(guests);
      }
      setIsLoading(false);
    };

    fetchGuestsFromGroupId();
  }, [groupId]);

  const createFormComponents = (guests) => {
    return (
      <div>
        {guestsInGroup.map((guest, index) => (
          <RsvpForm guest={guest} key={index} />
        ))}
      </div>
    );
  };

  const toggleStoredGroupId = () => {
    if (localStorage.getItem('groupId')) {
      localStorage.removeItem('groupId');
      setGroupId(undefined);
    } else {
      localStorage.setItem('groupId', '2hen1qB3QqjYwP8LbvDVx0nJ');
      setGroupId('2hen1qB3QqjYwP8LbvDVx0nJ');
    }
    console.log('stored groupId: ', localStorage.getItem('groupId'));
  };

  return (
    <div>
      <button onClick={toggleStoredGroupId}>Toggle stored groupId</button>

      {isLoading ? (
        <Loading />
      ) : guestsInGroup.length > 0 ? (
        createFormComponents(guestsInGroup)
      ) : (
        <RsvpAuth />
      )}
    </div>
  );
};

export default Rsvp;
