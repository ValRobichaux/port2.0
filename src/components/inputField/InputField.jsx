import "./InputField.scss";

export default function InputField({name,label,type,handleChange,value}) {
  return (
    <div className="inputfield">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </div>
  );
}
