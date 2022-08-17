import './styles.scss';

import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Currencies from '../Currencies';


function Converter() {
  return (
    <div className="converter">
      <BaseAmount />
      <Currencies />
      <BaseAmount />
    </div>
  );
}

export default Converter;
