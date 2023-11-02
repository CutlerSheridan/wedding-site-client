import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SERVER_URL from '../../serverUrl';
import Loading from '../Loading';
import AddressesTextInput from './AddressesTextInput';
import './Addresses.css';
import Cardstock from '../Cardstock';
import { Helmet } from 'react-helmet';

const AddressesPage = () => {
  const { jwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const isLoading = guests.length === 0;
  const currentGuests = guests.filter((x) => !x.declined && !x.next_round);
  const groups = currentGuests.reduce((acc, cur) => {
    if (!acc.length) {
      acc.push([cur]);
    } else {
      const lastIndex = acc.length - 1;
      if (acc[lastIndex][0].group === cur.group) {
        acc[lastIndex].push(cur);
      } else {
        acc.push([cur]);
      }
    }
    return acc;
  }, []);

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
  const handleEdits = async (guestId, payload) => {
    const response = await fetch(`${SERVER_URL}/api/1/guests/${guestId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const parsedResponse = await response.json();
    updateGuestsLocally(parsedResponse);
  };
  const updateGuestsLocally = (updatedGuest) => {
    const updatedGuestList = guests.map((x) =>
      x._id === updatedGuest._id ? updatedGuest : { ...x }
    );
    setGuests(updatedGuestList);
  };

  const createNameFieldGrouping = (group, field) => {
    return (
      <div className="addresses-fieldGrouping">
        {group.map((guest) => (
          <div
            key={`guest_${guest.name}_${field}`}
            className="addresses-fieldWrapper"
          >
            {guest[field]}
          </div>
        ))}
      </div>
    );
  };
  const createToggleFieldGrouping = (group, field) => {
    return (
      <div className="addresses-fieldGrouping">
        {group.map((guest) => createToggle(guest, field))}
      </div>
    );
  };
  const createToggle = (guest, field) => {
    const value = guest[field];
    return (
      <div
        key={`guest_${guest.name}_${field}`}
        className={`addresses-fieldWrapper addresses-cell addresses-toggle ${
          value ? 'addresses-toggle-on' : ''
        }`}
        onClick={() => {
          if (isEditing) {
            handleEdits(guest._id, { [field]: !guest[field] });
          }
        }}
      ></div>
    );
  };

  const createTextInputFieldGrouping = (group, field) => {
    const groupAddresses = getAddresses(group);

    return (
      <div
        className={`addresses-fieldGrouping addresses-fieldGrouping-${field}`}
      >
        {(() => {
          if (isEditing || (field === 'address' && groupAddresses.length > 1)) {
            return (
              <>
                {group.map((guest) => (
                  <AddressesTextInput
                    key={`guest_${guest.name}_${field}`}
                    guest={guest}
                    field={field}
                    isEditing={isEditing}
                    handleEdits={handleEdits}
                  />
                ))}
              </>
            );
          }
          if (field === 'address') {
            return (
              <div className="addresses-fieldWrapper addresses-cell">
                {groupAddresses[0]}
              </div>
            );
          }
        })()}
      </div>
    );
  };

  const getAddresses = (group) =>
    group.reduce((acc, cur) => {
      if (cur.address && !acc.includes(cur.address)) {
        return [...acc, cur.address];
      }
      return acc;
    }, []);

  const colNames = ['Guest Name', 'Ready to Send', 'Sent Char.', 'Address(es)'];

  return (
    <Cardstock>
      <Helmet>
        <title>Guest Addresses</title>
        <meta name="description" content="Track guest addresses by group." />
      </Helmet>
      <h1 className="addresses-header">Addresses</h1>
      <button
        type="button"
        className={`addresses-editButton ${isEditing ? 'button-selected' : ''}`}
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        Edit
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`addresses-wrapper ${
            isEditing ? 'addresses-wrapper-editing' : ''
          }`}
        >
          <div className="addresses-groupWrapper addresses-headingWrapper">
            {colNames.map((col) => (
              <div
                key={col}
                className="addresses-fieldWrapper addresses-headingField"
              >
                {col}
              </div>
            ))}
          </div>
          {groups.map((gr) => (
            <div key={`group_${gr[0].name}`} className="addresses-groupWrapper">
              {createNameFieldGrouping(gr, 'name')}
              {createToggleFieldGrouping(gr, 'ready_to_send')}
              {createToggleFieldGrouping(gr, 'sent_character')}
              {createTextInputFieldGrouping(gr, 'address')}
            </div>
          ))}
        </div>
      )}
    </Cardstock>
  );
};

export default AddressesPage;
