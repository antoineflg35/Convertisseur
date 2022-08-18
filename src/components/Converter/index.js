/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import './styles.scss';
import React from 'react';
import currenciesData from 'src/data/currencies';
import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Currencies from '../Currencies';
import Toggler from '../Toggler';

class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseAmount: 1,
      currency: currenciesData[0].name,
      open: true,
    };

    this.toggle = this.toggle.bind(this);
  }
  
  getConvertedAmount() {
    const { baseAmount, currency } = this.state;

    const foundCurrency = currenciesData.find(
      (currentCurrency) => currentCurrency.name === currency,
    );

    const { rate } = foundCurrency;

    return Math.round(baseAmount * rate * 100) / 100;
  }


  toggle() {
    console.log('toggle');
    this.setState({ open: !this.state.open });
  }

  
  render() {
    const { open, baseAmount, currency } = this.state;

    const convertedAmount = this.getConvertedAmount();

    return (
      <div className="converter">
        <BaseAmount amount={baseAmount} />
        <Toggler open={open} toggle={this.toggle} />
        { open && <Currencies currencies={currenciesData} /> }
        <ConvertedAmount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

export default Converter;
