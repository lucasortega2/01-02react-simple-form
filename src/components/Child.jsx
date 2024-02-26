const Child = ({ changeParentValue }) => {
  return (
    <div>
      <button onClick={changeParentValue}>Change Parent Data</button>
    </div>
  );
};

export default Child;
