import PropTypes from "prop-types";

// Functional Component
const CounterApp = ({ value }) => {
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number
};

export default CounterApp;
