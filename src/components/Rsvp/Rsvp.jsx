import { useState, useEffect } from 'react';
import RsvpAuth from './RsvpAuth';
import RsvpForm from './RsvpForm';
import Loading from '../Loading';
import EVENTS from '../../eventInfo';
import SERVER_URL from '../../serverUrl';
import Cardstock from '../Cardstock';
import { Helmet } from 'react-helmet';

const Rsvp = () => {
  const [groupId, setGroupId] = useState(localStorage.getItem('groupId'));
  const [guestsInGroup, setGuestsInGroup] = useState([]);
  const invitedGuestsInGroup = guestsInGroup.filter((x) => !x.next_round);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuestsFromGroupId = async () => {
      if (groupId && !guestsInGroup.length) {
        const response = await fetch(`${SERVER_URL}/api/1/groups/${groupId}`);
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
    let eventCounter = 0;
    return (
      <>
        <div className="rsvp-instructions">
          <p>Please respond by December 17th.</p>
          <p>
            You do not need to RSVP for all events or guests at the same time.
          </p>
        </div>
        {guests.length > 1 ? <p></p> : <></>}
        {EVENTS.map((ev) => {
          if (ev.needsRsvp) {
            return (
              <div key={ev.title}>
                <RsvpForm
                  event={ev}
                  guests={guests}
                  rsvpField={rsvpFields[eventCounter++]}
                  fieldType="checkbox"
                />
                <div className="rsvp-separator"></div>
              </div>
            );
          }
          return '';
        })}
        <RsvpForm
          event={{
            title: 'Address',
            time: '',
            description: [
              `If ${
                guests.length === 2 ? 'both' : 'all'
              } members of your party are
            at the same address, you only need to fill this in for one person.`,
            ],
          }}
          guests={guests}
          rsvpField="address"
          fieldType="address"
        />

        <div className="rsvp-separator"></div>
        <button
          type="button"
          onClick={() => {
            forgetGroupId();
            window.scroll(0, 0);
          }}
        >
          Find other guest
        </button>
      </>
    );
  };

  const updateGroupId = (newId) => {
    setGroupId(newId);
  };
  const updateGuestsInGroup = (newGuests) => {
    setGuestsInGroup(newGuests);
  };

  const forgetGroupId = () => {
    localStorage.removeItem('groupId');
    setGroupId(undefined);
  };

  return (
    <Cardstock>
      <Helmet>
        <title>RSVP</title>
        <meta
          name="description"
          content="RSVP for Cutler and Tyler's wedding."
        />
      </Helmet>
      <h1>RSVP</h1>

      {groupId ? (
        isLoading ? (
          <Loading />
        ) : (
          createFormComponents(invitedGuestsInGroup)
        )
      ) : (
        <RsvpAuth
          setGroupId={updateGroupId}
          setGuestsInGroup={updateGuestsInGroup}
        />
      )}
    </Cardstock>
  );
};

export default Rsvp;
