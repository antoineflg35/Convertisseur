import PropTypes from 'prop-types';
import './styles.scss';

function ConvertedAmount({amount, currency}) {
  return (
    <footer className="converted-amount">
      <p className="converted-amount__amount">{ amount }</p>
      <p className="converted-amount__currency">{ currency }</p>
    </footer>
  );
}

ConvertedAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ConvertedAmount;
