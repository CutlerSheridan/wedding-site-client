import './Inputs.css';

const ShortTextInput = ({ field, label, value, handleChange, isEditing }) => {
  return (
    <div
      className={`input-grouping ${field === 'name' ? 'input-nameGroup' : ''}`}
    >
      <div className="input-label">{label}:</div>
      {isEditing ? (
        <input
          onChange={(e) => handleChange({ [field]: e.target.value })}
          value={value}
        />
      ) : (
        <div
          className={`input-displayText ${
            field === 'name' ? 'input-displayEmphasis' : ''
          }`}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default ShortTextInput;
