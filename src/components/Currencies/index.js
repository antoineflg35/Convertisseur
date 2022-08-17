import './styles.scss';
import PropTypes from 'prop-types';
import Currency from './Currency';

function Currencies({ currencies }) {
  return (
    <main className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {
          currencies.map(
            (currency) => <Currency key={currency.name} name={currency.name} />,
          )
        }
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
