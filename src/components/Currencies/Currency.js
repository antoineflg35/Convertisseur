import PropTypes from 'prop-types';

function Currency({ name, setCurrency }) {
  const handleClick = () => {
    console.log(name);
    setCurrency(name);
  };
  return (
    <li className="currencies__item" onClick={handleClick}>{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default Currency;
