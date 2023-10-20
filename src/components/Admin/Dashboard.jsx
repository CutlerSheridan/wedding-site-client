import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import SERVER_URL from '../../serverUrl';
import './Dashboard.css';
import Table from './Table';
import Loading from '../Loading';
import Cardstock from '../Cardstock';

const Dashboard = () => {
  const { jwt } = useOutletContext();
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { styleParam } = useParams();
  const displayStyle = styleParam || 'merged';
  const navigate = useNavigate();
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

  // payload should be {field: value, field2: value2}
  const handleEdits = async (guestId, payload) => {
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
    }
  };
  const createMergedDisplay = () => {
    return (
      <div className="dashboard-tablesWrapper">
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
          handleEdits={handleEdits}
        />
        {createRsvpsEndTables()}
      </div>
    );
  };
  const createFamiliesDisplay = () => {
    return (
      <div className="dashboard-tablesWrapper">
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
          handleEdits={handleEdits}
        />
        <div className="dashboard-separator"></div>
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
          handleEdits={handleEdits}
        />
        <div className="dashboard-separator"></div>
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
          handleEdits={handleEdits}
        />
        {createRsvpsEndTables()}
      </div>
    );
  };
  const createRsvpsEndTables = () => {
    return (
      <>
        <div className="dashboard-separator"></div>
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
          handleEdits={handleEdits}
        />
        <div className="dashboard-separator"></div>
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
          handleEdits={handleEdits}
        />
      </>
    );
  };

  return (
    <Cardstock>
      <h1>Dashboard</h1>
      <div className="dashboard-controls">
        <div className="dashboard-tableTypeButtons">
          <button
            type="button"
            className={`dashboard-displayButton ${
              displayStyle === 'merged' ? 'button-selected' : ''
            }`}
            onClick={() =>
              navigate(styleParam ? '../merged' : 'merged', {
                relative: 'path',
              })
            }
          >
            Merged
          </button>
          <button
            type="button"
            className={`dashboard-displayButton ${
              displayStyle === 'families' ? 'button-selected' : ''
            }`}
            onClick={() =>
              navigate(styleParam ? '../families' : 'families', {
                relative: 'path',
              })
            }
          >
            Families
          </button>
        </div>
        <button
          type="button"
          className={`${isEditing ? 'button-selected' : ''}`}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          Edit
        </button>
      </div>
      {isLoading ? <Loading /> : createDisplay()}
    </Cardstock>
  );
};

export default Dashboard;
