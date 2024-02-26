import { useState } from "react";
const init = {
  name: "",
  role: "",
};
const Form = () => {
  const [form, setForm] = useState(init);

  const handleChangeForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <h1>Form</h1>
      <label>
        Insert your name
        <input
          type="text"
          name="name"
          onInput={handleChangeForm}
          value={form.name}
        />
      </label>
      <label>
        Select your role
        <select name="role" onChange={handleChangeForm}>
          <option>Designer</option>
          <option>Developer</option>
          <option>Dev op</option>
        </select>
      </label>
    </>
  );
};

export default Form;
