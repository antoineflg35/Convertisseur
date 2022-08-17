import './styles.scss';

import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Currencies from '../Currencies';

function Converter() {
  return (
    <div className="converter">
      <BaseAmount />
      <Currencies />
      <ConvertedAmount />
    </div>
  );
}

export default Converter;
