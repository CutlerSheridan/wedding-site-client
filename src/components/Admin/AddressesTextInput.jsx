import { useState } from 'react';

const AddressesTextInput = ({ guest, field, isEditing, handleEdits }) => {
  const [inputText, setInputText] = useState(guest[field] ?? undefined);

  if (isEditing) {
    return (
      <form className={`addresses-fieldWrapper addresses-cell`}>
        <textarea
          className={`addresses-textarea`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="button"
          className="addresses-saveButton"
          onClick={() => {
            handleEdits(guest._id, { [field]: inputText });
          }}
        >
          Save
        </button>
      </form>
    );
  }
  return (
    <div
      key={`guest_${guest.name}_${field}`}
      className="addresses-fieldWrapper addresses-cell"
    >
      {inputText}
    </div>
  );
};

export default AddressesTextInput;
