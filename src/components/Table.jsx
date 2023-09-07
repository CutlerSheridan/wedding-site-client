import './Table.css';

const Table = ({
  guests,
  isEditing,
  title = 'Default',
  declinedVisible = false,
  includeTotals = false,
  handleEdit,
}) => {
  const colNames = [
    'Save the Date',
    'Invitation',
    'RSVP - Fri.',
    'RSVP - Sat.',
    'RSVP - Sun.',
  ];
  const fields = [
    'sent_savedate',
    'sent_invite',
    'fri_rsvp',
    'sat_rsvp',
    'sun_rsvp',
  ];
  if (isEditing) {
    colNames.push('Declined', 'Next Round');
    fields.push('declined', 'next_round');
  } else if (declinedVisible) {
    colNames.push('Declined');
    fields.push('declined');
  }

  const createTableBody = (guests) => {
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
    <table className={`table-rsvp`}>
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
      {createTableBody(guests)}
    </table>
  );
};

export default Table;
