import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SERVER_URL from '../../serverUrl';
import './Dashboard.css';
import Table from '../Table';
import Loading from '../Loading';
import Addresses from '../Addresses';

const Dashboard = () => {
  const { jwt, updateJwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [displayStyle, setDisplayStyle] = useState('merged');
  const isLoading = guests.length === 0;
  const currentGuests = guests.filter((x) => !x.declined && !x.next_round);
  const nextRoundGuests = guests.filter((x) => x.next_round && !x.declined);
  const declinedGuests = guests.filter((x) => x.declined);

  useEffect(() => {
    const fetchGuests = async () => {
      const response = await fetch(`${SERVER_URL}/api/1/guests`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const parsedResponse = await response.json();
      console.log('guests: ', parsedResponse.guests);
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

  const createDisplay = () => {
    switch (displayStyle) {
      case 'merged':
        return createMergedDisplay();
      case 'families':
        return createFamiliesDisplay();
      case 'addresses':
        return createAddressList();
    }
  };
  const createMergedDisplay = () => {
    return (
      <>
        <Table
          guests={currentGuests}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          isEditing={isEditing}
          title="Current List"
          includeTotals={true}
          declinedVisible={isEditing}
          handleEdit={handleEdit}
        />
        {createRsvpsEndTables()}
      </>
    );
  };
  const createFamiliesDisplay = () => {
    return (
      <>
        <Table
          guests={currentGuests.filter((x) => x.family === 'cutler')}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          isEditing={isEditing}
          title="Cutler's Family"
          includeTotals={true}
          handleEdit={handleEdit}
        />
        <Table
          guests={currentGuests.filter((x) => x.family === 'tyler')}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          isEditing={isEditing}
          title="Tyler's Family"
          includeTotals={true}
          handleEdit={handleEdit}
        />
        <Table
          guests={currentGuests.filter(
            (x) => x.family !== 'cutler' && x.family !== 'tyler'
          )}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          isEditing={isEditing}
          title="Friends"
          includeTotals={true}
          handleEdit={handleEdit}
        />
        {createRsvpsEndTables()}
      </>
    );
  };
  const createRsvpsEndTables = () => {
    return (
      <>
        <Table
          guests={nextRoundGuests}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          isEditing={isEditing}
          title="Standby Guests"
          handleEdit={handleEdit}
        />
        <Table
          guests={declinedGuests}
          longestName={(() => {
            const sortedGuests = [...guests].sort(
              (x, y) => y.name.length - x.name.length
            );
            return sortedGuests[0].name;
          })()}
          title="Declined Guests"
          isEditing={isEditing}
          handleEdit={handleEdit}
        />
      </>
    );
  };

  const createAddressList = () => {
    return (
      <>
        <Addresses
          currentGuests={currentGuests}
          isEditing={isEditing}
          handleEdit={handleEdit}
        />
      </>
    );
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-controls">
        <button type="button" onClick={() => setDisplayStyle('merged')}>
          Merged
        </button>
        <button type="button" onClick={() => setDisplayStyle('families')}>
          Families
        </button>
        <button type="button" onClick={() => setDisplayStyle('addresses')}>
          Addresses
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? 'Stop Editing' : 'Start Editing'}
      </button>
      {isLoading ? <Loading /> : createDisplay()}
    </>
  );
};

export default Dashboard;
