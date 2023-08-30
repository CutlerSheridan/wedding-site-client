import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SERVER_URL from '../../serverUrl';
import './Dashboard.css';
import Table from '../Table';

const Dashboard = () => {
  const { jwt, updateJwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const isLoading = guests.length === 0;
  const currentGuests = guests.filter((x) => !x.declined && !x.next_round);
  const nextRoundGuests = guests.filter((x) => x.next_round);
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

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-controls">
        <button type="button">Merged</button>
        <button type="button">Families</button>
        <button type="button">Groups</button>
      </div>
      <Table guests={currentGuests} title="Current List" includeTotals={true} />
      <Table guests={nextRoundGuests} title="Standby Guests" />
      <Table
        guests={declinedGuests}
        title="Declined Guests"
        declinedVisible={true}
      />
    </>
  );
};

export default Dashboard;
