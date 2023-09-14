import { useNavigate } from 'react-router-dom';

const GroupForm = ({ guests, groupId }) => {
  const navigate = useNavigate();
  const guestsInGroup = guests.filter((x) => x.group === groupId);

  return (
    <>
      <h1>Group Info</h1>

      <button type="button">Edit</button>
      <button
        type="button"
        onClick={() => navigate('..', { relative: 'path' })}
      >
        Back
      </button>
    </>
  );
};

export default GroupForm;
