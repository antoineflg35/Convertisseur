import './styles.scss';
import Currency from './Currency';

function Currencies() {
  return (
    <main className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        <Currency />
        <Currency />
        <Currency />
        <Currency />
      </ul>
    </main>
  );
}

export default Currencies;
