import './Inputs.css';

const TextareaInput = ({
  field,
  label = field,
  value,
  handleChange,
  isEditing,
}) => {
  return (
    <div className="input-grouping input-grouping-textarea">
      <div className="input-label">{label}:</div>
      {isEditing ? (
        <textarea
          value={value ?? ''}
          onChange={(e) => handleChange({ [field]: e.target.value })}
        />
      ) : (
        <div className="input-displayText">{value ?? ' \n '}</div>
      )}
    </div>
  );
};

export default TextareaInput;
