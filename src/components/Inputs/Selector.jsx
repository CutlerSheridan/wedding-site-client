import './Inputs.css';

const Selector = ({
  field,
  label,
  value,
  handleChange,
  optionLabels,
  optionValues,
  isEditing,
}) => {
  return (
    <div className="input-grouping">
      <div className="input-label">{label}:</div>
      {isEditing ? (
        <select
          value={value}
          onChange={(e) => handleChange({ [field]: e.target.value })}
        >
          {optionLabels.map((x, index) => (
            <option key={x} value={optionValues[index]}>
              {x}
            </option>
          ))}
        </select>
      ) : (
        <div className="input-displayText">
          {!value ? 'None' : optionLabels[optionValues.indexOf(value)]}
        </div>
      )}
    </div>
  );
};

export default Selector;
