import './styles.scss';
import PropTypes from 'prop-types';

function Toggler({ open, toggle }) {
  return (
    <button className={open ? 'toggler toggler--open' : 'toggler'} type="button" onClick={()=> toggle()}>
      =
    </button>
  );
}

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;
