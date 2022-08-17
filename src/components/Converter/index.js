import './styles.scss';

import currenciesData from 'src/data/currencies';
import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Currencies from '../Currencies';

function Converter() {
  return (
    <div className="converter">
      <BaseAmount amount={2} />
      <Currencies currencies={currenciesData} />
      <ConvertedAmount />
    </div>
  );
}

export default Converter;
