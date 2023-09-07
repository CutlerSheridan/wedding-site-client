import './Addresses.css';
import AddressesTextInput from './AddressesTextInput';

const Addresses = ({ currentGuests, isEditing, handleEdit }) => {
  const groups = currentGuests.reduce((acc, cur) => {
    const accCopy = [...acc];
    if (!accCopy.length) {
      accCopy.push([cur]);
    } else {
      const lastIndex = accCopy.length - 1;
      if (accCopy[lastIndex][0].group === cur.group) {
        accCopy[lastIndex].push(cur);
      } else {
        accCopy.push([cur]);
      }
    }
    return accCopy;
  }, []);

  const createNameFieldGrouping = (group, field) => {
    return (
      <div className="addresses-fieldGrouping">
        {group.map((guest) => (
          <div
            key={`guest_${guest.name}_${field}`}
            className="addresses-fieldWrapper"
          >
            {guest[field]}
          </div>
        ))}
      </div>
    );
  };
  const createToggleFieldGrouping = (group, field) => {
    return (
      <div className="addresses-fieldGrouping">
        {group.map((guest) => createToggle(guest, field))}
      </div>
    );
  };
  const createToggle = (guest, field) => {
    const value = guest[field];
    return (
      <div
        key={`guest_${guest.name}_${field}`}
        className={`addresses-fieldWrapper addresses-cell addresses-toggle ${
          value ? 'addresses-toggle-on' : ''
        }`}
        onClick={() => {
          if (isEditing) {
            handleEdit(guest._id, field, !guest[field]);
          }
        }}
      ></div>
    );
  };

  const createTextInputFieldGrouping = (group, field) => {
    const groupAddresses = getAddresses(group);

    return (
      <div className="addresses-fieldGrouping">
        {(() => {
          if (isEditing || (field === 'address' && groupAddresses.length > 1)) {
            return (
              <>
                {group.map((guest) => (
                  <AddressesTextInput
                    key={`guest_${guest.name}_${field}`}
                    guest={guest}
                    field={field}
                    isEditing={isEditing}
                    handleEdit={handleEdit}
                  />
                ))}
              </>
            );
          }
          if (field === 'address' && !groupAddresses.length) {
            return <div className="addresses-fieldWrapper"></div>;
          }
          if (field === 'address' && groupAddresses.length === 1) {
            return (
              <div className="addresses-fieldWrapper">{groupAddresses[0]}</div>
            );
          }
        })()}
      </div>
    );
  };

  const getAddresses = (group) =>
    group.reduce((acc, cur) => {
      if (cur.address && !acc.includes(cur.address)) {
        return [...acc, cur.address];
      }
      return acc;
    }, []);

  const colNames = ['', 'Invited', 'Sent Char.', 'Address(es)'];

  return (
    <div className="addresses-wrapper">
      <div className="addresses-groupWrapper addresses-headingWrapper">
        {colNames.map((col) => (
          <div
            key={col}
            className="addresses-fieldWrapper addresses-headingField"
          >
            {col}
          </div>
        ))}
      </div>

      {groups.map((gr) => (
        <div key={`group_${gr[0].name}`} className="addresses-groupWrapper">
          {createNameFieldGrouping(gr, 'name')}
          {createToggleFieldGrouping(gr, 'sent_invite')}
          {createToggleFieldGrouping(gr, 'sent_character')}
          {createTextInputFieldGrouping(gr, 'address')}
        </div>
      ))}
    </div>
  );
};

export default Addresses;
