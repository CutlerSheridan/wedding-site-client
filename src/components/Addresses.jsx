import './Addresses.css';
import SERVER_URL from '../serverUrl';

const Addresses = ({ currentGuests, isEditing, updateGuestsLocally }) => {
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

  const createFieldWrapper = (group, field) => {
    return (
      <div className="addresses-fieldGrouping">
        {(() => {
          const groupAddresses = getAddresses(group);
          if (field === 'address' && !groupAddresses.length) {
            return <div className="addresses-fieldWrapper"></div>;
          }
          if (field === 'address' && groupAddresses.length === 1) {
            return (
              <div className="addresses-fieldWrapper">{groupAddresses[0]}</div>
            );
          }
          return (
            <>
              {group.map((guest) => (
                <div
                  key={`guest_${guest.name}_${field}`}
                  className="addresses-fieldWrapper"
                >
                  {typeof guest[field] === 'string' ||
                  typeof guest[field] === 'boolean'
                    ? `${guest[field]}`
                    : null}
                </div>
              ))}
            </>
          );
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

  return (
    <div className="addresses-wrapper">
      {groups.map((gr) => (
        <div key={`group_${gr[0].name}`} className="addresses-groupWrapper">
          {createFieldWrapper(gr, 'name')}
          {createFieldWrapper(gr, 'sent_invite')}
          {createFieldWrapper(gr, 'sent_character')}
          {createFieldWrapper(gr, 'address')}
        </div>
      ))}
    </div>
  );
};

export default Addresses;
