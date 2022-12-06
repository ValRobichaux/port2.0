import "./TextField.scss";

export default function TextField({ handleChange, label, name, value, type}) {
  return (
    <div className="textfield">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="textarea"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        rows="4"
      ></textarea>
    </div>
  );
}
