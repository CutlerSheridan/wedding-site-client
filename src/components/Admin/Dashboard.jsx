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
      const response = await fetch(`${SERVER_URL}/api/1/guests`);
      const parsedResponse = await response.json();
      console.log('guests: ', parsedResponse.guests);
      setGuests(parsedResponse.guests);
    };

    fetchGuests();
  }, []);

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
          isEditing={isEditing}
          title="Current List"
          includeTotals={true}
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />
        <Table
          guests={nextRoundGuests}
          isEditing={isEditing}
          title="Standby Guests"
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />
        <Table
          guests={declinedGuests}
          title="Declined Guests"
          isEditing={isEditing}
          declinedVisible={true}
          updateGuestsLocally={updateGuestsLocally}
        />
      </>
    );
  };
  const createFamiliesDisplay = () => {
    return (
      <>
        <Table
          guests={currentGuests.filter((x) => x.family === 'cutler')}
          isEditing={isEditing}
          title="Cutler's Family"
          includeTotals={true}
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />
        <Table
          guests={currentGuests.filter((x) => x.family === 'tyler')}
          isEditing={isEditing}
          title="Tyler's Family"
          includeTotals={true}
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />
        <Table
          guests={currentGuests.filter(
            (x) => x.family !== 'cutler' && x.family !== 'tyler'
          )}
          isEditing={isEditing}
          title="Friends"
          includeTotals={true}
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />

        <Table
          guests={nextRoundGuests}
          isEditing={isEditing}
          title="Standby Guests"
          declinedVisible={isEditing}
          updateGuestsLocally={updateGuestsLocally}
        />
        <Table
          guests={declinedGuests}
          title="Declined Guests"
          isEditing={isEditing}
          declinedVisible={true}
          updateGuestsLocally={updateGuestsLocally}
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
          updateGuestsLocally={updateGuestsLocally}
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
