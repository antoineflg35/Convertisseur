import PropTypes from 'prop-types';

function Currency({ name }) {
  return (
    <li className="currencies__item">{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
