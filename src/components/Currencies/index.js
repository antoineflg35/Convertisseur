import './styles.scss';
import PropTypes from 'prop-types';
import Currency from './Currency';

function Currencies({
  currencies, setCurrency, search, setSearch,
}) {
  return (
    <main className="currencies">
      <input
        type="text"
        className="currencies__search"
        placeholder="Chercher une devise"
        value={search}
        onChange={(event) => {
          console.log(event.target.value);
          setSearch(event.target.value);
        }}
      />
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {
          currencies.map(
            (currency) => <Currency key={currency.name} name={currency.name} setCurrency={setCurrency} />,
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

    }),
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
