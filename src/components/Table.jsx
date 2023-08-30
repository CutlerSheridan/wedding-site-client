import { useState } from 'react';
import './Table.css';

const Table = ({
  guests,
  title = 'Default',
  tableType = 'rsvp',
  declinedVisible = false,
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
        'Declined',
      ];
      fields = [
        'sent_savedate',
        'sent_invite',
        'fri_rsvp',
        'sat_rsvp',
        'sun_rsvp',
        'declined',
      ];
      break;
    case 'address':
      colNames = [];
      fields = [];
      break;
  }

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
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.name}>
              <th scope="row">{guest.name}</th>
              {fields.map((field) => (
                <td
                  key={guest.name + '_' + field}
                  className={
                    field === 'declined'
                      ? `table-declinedCol-${
                          declinedVisible ? 'visible' : 'hidden'
                        }`
                      : null
                  }
                >
                  {field.includes('rsvp')
                    ? guest[field]
                      ? '✅'
                      : guest[field] === false
                      ? '❌'
                      : ''
                    : guest[field]
                    ? `${field === 'declined' ? '❌' : '✅'}`
                    : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
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
              key={col}
              scope="col"
              className={
                col.toLowerCase() === 'declined'
                  ? `table-declinedCol-${
                      declinedVisible ? 'visible' : 'hidden'
                    }`
                  : null
              }
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      {createTableBodyByType(guests, tableType)}
    </table>
  );
};

export default Table;
