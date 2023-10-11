import './Table.css';

const Table = ({
  guests,
  longestName,
  isEditing,
  title = 'Default',
  includeTotals = false,
  handleEdits,
  tableType = 'dashboard',
}) => {
  let colNames, fields;
  switch (tableType) {
    case 'dashboard':
      colNames = [
        'Save the Date',
        'Invited',
        'RSVP - Fri.',
        'RSVP - Sat.',
        'RSVP - Sun.',
      ];
      fields = [
        'sent_savedate',
        'sent_invite',
        'fri_rsvp',
        'sat_rsvp',
        'sun_rsvp',
      ];
      if (isEditing) {
        colNames.push('Next Round', 'Declined');
        fields.push('next_round', 'declined');
      }
      break;
    case 'soloGuest':
      colNames = [
        'Save the Date',
        'Invited',
        'RSVP - Fri.',
        'RSVP - Sat.',
        'RSVP - Sun.',
        'Next Round',
        'Declined',
        'Can Send Char.',
        'Sent Char.',
      ];
      fields = [
        'sent_savedate',
        'sent_invite',
        'fri_rsvp',
        'sat_rsvp',
        'sun_rsvp',
        'next_round',
        'declined',
        'ready_to_send',
        'sent_character',
      ];
  }

  const createTableBody = (guests) => {
    return (
      <>
        <tbody className={isEditing ? 'table-body-editing' : null}>
          {guests.map((guest) => (
            <tr key={guest.name + '_row'}>
              <th
                scope="row"
                style={{ width: 'calc(' + (longestName.length - 1) + 'ch)' }}
              >
                {guest.name}
              </th>
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
                  ${field === 'declined' ? 'table-declinedCell' : ''}`}
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
                      handleEdits(guestId, { [fieldName]: newValue });
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
                    field.toLowerCase().includes('rsvp')
                      ? 'table-rsvp-total'
                      : ''
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
    <div className={`table-container table-container-${tableType}`}>
      <h2
        className={`table-caption ${
          title.toLowerCase() === 'declined guests'
            ? 'table-declinedRsvpCaption'
            : ''
        }`}
      >
        {title}
      </h2>
      <table
        className={`table-rsvp ${
          title.toLowerCase() === 'declined guests' ? 'table-declined' : ''
        } ${isEditing ? 'table-editing' : ''}`}
      >
        <thead>
          <tr>
            <th scope="col"></th>
            {colNames.map((col) => (
              <th key={'thead_' + col} scope="col">
                <div className="table-colHeading-vertical">{col}</div>
              </th>
            ))}
          </tr>
        </thead>
        {createTableBody(guests)}
      </table>
    </div>
  );
};

export default Table;
