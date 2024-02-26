import { useEffect, useState } from "react";
const init = {
  name: "",
  rol: "",
};
const Form = () => {
  const [form, setForm] = useState(init);
  const [showFormInfo, setShowFormInfo] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const isTrue = form.name.length > 0 || form.rol.length > 0;
    if (isTrue) {
      setShowFormInfo(true);
    } else {
      setShowFormInfo(false);
    }
  }, [form]);
  return (
    <>
      <form>
        <h2>Primer ejercicio:</h2>
        <h1>Form</h1>
        <label>
          Insert your name
          <input
            autoComplete="off"
            type="text"
            name="name"
            onInput={handleChangeForm}
            value={form.name}
          />
        </label>
        <label>
          Select your rol
          <select name="rol" onChange={handleChangeForm}>
            <option disabled selected>
              Select your rol
            </option>
            <option>Designer</option>
            <option>Developer</option>
            <option>Dev op</option>
          </select>
        </label>
        {
          <div className={"formInfo" + (showFormInfo ? " show" : "")}>
            <p>
              Your name is: <strong> {form.name} </strong>
            </p>
            <p>
              And your rol is: <strong> {form.rol} </strong>
            </p>
          </div>
        }
      </form>
    </>
  );
};

export default Form;
