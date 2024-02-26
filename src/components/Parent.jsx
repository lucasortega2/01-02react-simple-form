import React, { useState } from "react";
import Child from "./Child";
const init = "Hello From Parent";
const Parent = () => {
  const [parentValue, setParentValue] = useState(init);
  const changeParentValue = () => {
    setParentValue("Hello From Child");
    if (parentValue === "Hello From Child") setParentValue(init);
  };
  return (
    <>
      <h1>{parentValue} </h1>
      <Child changeParentValue={changeParentValue} />
    </>
  );
};

export default Parent;
