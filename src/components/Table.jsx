import './Table.css';
import SERVER_URL from '../serverUrl';

const Table = ({
  guests,
  isEditing,
  title = 'Default',
  tableType = 'rsvp',
  declinedVisible = false,
  includeTotals = false,
  updateGuestsLocally,
}) => {
  let colNames;
  let fields;
  switch (tableType) {
    case 'rsvp':
      colNames = [
        'Save the Date',
        'Invitation',
        'RSVP - Fri.',
        'RSVP - Sat.',
        'RSVP - Sun.',
      ];
      if (isEditing) {
        colNames.push('Declined', 'Next Round');
      } else if (declinedVisible) {
        colNames.push('Declined');
      }
      fields = [
        'sent_savedate',
        'sent_invite',
        'fri_rsvp',
        'sat_rsvp',
        'sun_rsvp',
      ];
      if (isEditing) {
        fields.push('declined', 'next_round');
      } else if (declinedVisible) {
        fields.push('declined');
      }
      break;
    case 'address':
      colNames = [];
      fields = [];
      break;
  }

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

  const createTableBodyByType = (guests, tableType) => {
    switch (tableType) {
      case 'rsvp':
        return createRsvpTableBody(guests);
      case 'addresses':
        return '';
    }
  };
  const createRsvpTableBody = (guests) => {
    return (
      <>
        <tbody className={isEditing ? 'table-editing' : null}>
          {guests.map((guest) => (
            <tr key={guest.name}>
              <th scope="row">{guest.name}</th>
              {fields.map((field) => (
                <td
                  key={guest.name + '_' + field}
                  className={`table-cell ${
                    field.includes('rsvp')
                      ? guest[field]
                        ? 'table-cell-positive table-cell-cycle'
                        : guest[field] === false
                        ? 'table-cell-negative table-cell-cycle'
                        : null
                      : guest[field]
                      ? field === 'declined'
                        ? 'table-cell-negative table-cell-toggle'
                        : 'table-cell-positive table-cell-toggle'
                      : null
                  }
                  ${
                    field === 'declined'
                      ? 'table-declinedCell table-declinedCol-' +
                        (declinedVisible ? 'visible' : 'hidden')
                      : null
                  }`}
                  onClick={() => {
                    if (isEditing) {
                      const guestId = guest._id;
                      const fieldName = field;
                      let newValue;
                      if (field.includes('rsvp')) {
                        switch (guest[field]) {
                          case true:
                            newValue = false;
                            break;
                          case false:
                            newValue = null;
                            break;
                          default:
                            newValue = true;
                            break;
                        }
                      } else {
                        newValue = !guest[field];
                      }
                      handleEdit(guestId, fieldName, newValue);
                    }
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
        {includeTotals ? (
          <tfoot>
            <tr>
              <th scope="row">BOAT COUNT: {guests.length + 2}</th>
              {fields.map((field) => (
                <td
                  key={'tfoot_' + field}
                  className={`${
                    field === 'declined'
                      ? 'table-declinedCol-' +
                        (declinedVisible ? 'visible' : 'hidden')
                      : null
                  }`}
                >
                  {guests.reduce((acc, cur) => {
                    if (cur[field]) {
                      return ++acc;
                    }
                    return acc;
                  }, 0)}
                </td>
              ))}
            </tr>
          </tfoot>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <table className={`table-${tableType}`}>
      <caption>{title}</caption>
      <thead>
        <tr>
          <th scope="col"></th>
          {colNames.map((col) => (
            <th
              key={'thead_' + col}
              scope="col"
              className={
                col.toLowerCase() === 'declined'
                  ? `table-declinedCol-${
                      declinedVisible ? 'visible' : 'hidden'
                    }`
                  : null
              }
            >
              <div className="table-colHeading-vertical">{col}</div>
            </th>
          ))}
        </tr>
      </thead>
      {createTableBodyByType(guests, tableType)}
    </table>
  );
};

export default Table;
