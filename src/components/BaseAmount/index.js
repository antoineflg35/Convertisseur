import './styles.scss';
import PropTypes from 'prop-types';

function BaseAmount({ amount }) {
  return (
    <header className="base-amount">
      <h1 className="base-amount__title">Converter</h1>
      <p className="base-amount__amount">{amount} {amount >= 2 ? 'euros' : 'euro' }</p>
    </header>
  );
}

BaseAmount.propTypes = {
  amount: PropTypes.number.isRequired,
};
export default BaseAmount;
