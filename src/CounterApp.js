import PropTypes from "prop-types";
import { useState } from "react";

// Functional Component
const CounterApp = ({ value }) => {
  // Hook
  const [counter, setCounter] = useState(0); // retorna un [] con dos valores.

  // HandleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
