const Child = ({ changeParentValue }) => {
  return (
    <div className="button">
      <button onClick={() => changeParentValue("Hello From Child")}>
        Change Parent Data
      </button>
    </div>
  );
};

export default Child;
