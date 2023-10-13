import './Inputs.css';

const ShortTextInput = ({
  field,
  label = field,
  value,
  handleChange,
  isEditing,
}) => {
  return (
    <div
      className={`input-grouping ${field === 'name' ? 'input-nameGroup' : ''}`}
    >
      <div className="input-label">{label}:</div>
      {isEditing ? (
        <input
          type="text"
          value={value ?? ''}
          onChange={(e) => handleChange({ [field]: e.target.value })}
        />
      ) : (
        <div
          className={`input-displayText ${
            field === 'name' ? 'input-displayEmphasis' : ''
          }`}
        >
          {value ?? ' '}
        </div>
      )}
    </div>
  );
};

export default ShortTextInput;
