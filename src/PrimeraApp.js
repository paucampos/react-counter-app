import PropTypes from 'prop-types';

// Functional Component
const PrimeraApp = ({saludo}) => {
  
  return (
    <>
      <h1> {saludo} </h1>
      <p>Mi primer componente</p>
    </>
  );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
export default PrimeraApp;
