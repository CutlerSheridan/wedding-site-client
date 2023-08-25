import { useState, useEffect } from 'react';
import RsvpAuth from './RsvpAuth';
import RsvpForm from './RsvpForm';
import Loading from '../Loading';
import EVENTS from '../../eventInfo';

const Rsvp = () => {
  const [groupId, setGroupId] = useState(localStorage.getItem('groupId'));
  const [guestsInGroup, setGuestsInGroup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuestsFromGroupId = async () => {
      if (groupId && !guestsInGroup.length) {
        const response = await fetch(
          `http://localhost:3000/api/1/groups/${groupId}`
        );
        const guests = await response.json();
        setGuestsInGroup(guests);
      } else if (!groupId) {
        setGuestsInGroup([]);
      }
      setIsLoading(false);
    };

    fetchGuestsFromGroupId();
  }, [groupId]);

  const createFormComponents = (guests) => {
    const rsvpFields = ['fri_rsvp', 'sat_rsvp', 'sun_rsvp'];
    let counter = 0;
    return (
      <div>
        <p>Please respond as soon as possible.</p>
        <p>
          You do not need to RSVP to all events at the same time. If you only
          know you'll be there Saturday, go ahead and select your answer for
          Saturday and leave the others blank.
        </p>
        {guests.length > 1 ? (
          <p>
            If {guests.length === 2 ? 'both' : 'all'} members of your party are
            at the same address, you only need to fill that in for one person.
          </p>
        ) : (
          <></>
        )}
        {EVENTS.map((ev, index) => {
          if (ev.needsRsvp) {
            return (
              <RsvpForm
                key={ev.title}
                event={ev}
                guests={guests}
                rsvpField={rsvpFields[counter++]}
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
    );
  };

  const updateGroupId = (newId) => {
    setGroupId(newId);
  };
  const updateGuestsInGroup = (newGuests) => {
    setGuestsInGroup(newGuests);
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
      <h1>RSVP</h1>

      {isLoading ? (
        <Loading />
      ) : guestsInGroup.length ? (
        createFormComponents(guestsInGroup)
      ) : (
        <RsvpAuth
          setGroupId={updateGroupId}
          setGuestsInGroup={updateGuestsInGroup}
        />
      )}
    </div>
  );
};

export default Rsvp;
