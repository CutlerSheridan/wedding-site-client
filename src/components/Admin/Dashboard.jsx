import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SERVER_URL from '../../serverUrl';
import './Dashboard.css';
import Table from '../Table';

const Dashboard = () => {
  const { jwt, updateJwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
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

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-controls">
        <button type="button">Merged</button>
        <button type="button">Families</button>
        <button type="button">Groups</button>
      </div>
      <button
        type="button"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? 'Stop Editing' : 'Start Editing'}
      </button>
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

export default Dashboard;
