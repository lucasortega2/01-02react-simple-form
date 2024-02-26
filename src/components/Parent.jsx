import { useState } from "react";
import Child from "./Child";
const init = "Hello From Parent";
const Parent = () => {
  const [parentValue, setParentValue] = useState(init);
  const [isChange, setIsChange] = useState(false);
  const changeParentValue = (value) => {
    if (isChange) {
      setParentValue("Hello From Parent");
      setIsChange(false);
    } else {
      setParentValue(value);
      setIsChange(true);
    }
  };
  return (
    <>
      <section className="segundo-ejercicio">
        <h2>Segundo ejercicio:</h2>
        <h3>{parentValue} </h3>
        <Child changeParentValue={changeParentValue} />
      </section>
    </>
  );
};

export default Parent;
