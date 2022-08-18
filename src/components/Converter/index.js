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
      search: '',
    };

    this.toggle = this.toggle.bind(this);

    this.setCurrency = this.setCurrency.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  getConvertedAmount() {
    const { baseAmount, currency } = this.state;

    const foundCurrency = currenciesData.find(
      (currentCurrency) => currentCurrency.name === currency,
    );

    const { rate } = foundCurrency;

    return Math.round(baseAmount * rate * 100) / 100;
  }

  getFilteredCurrencies() {
    const { search } = this.state;

    const loweredSearch = search.toLowerCase();

    return currenciesData.filter(
      (currency) => {
        const loweredCurrencyName = currency.name.toLowerCase();
        return loweredCurrencyName.includes(loweredSearch);
      },
    );
  }

  setSearch(newSearch) {
    console.log(`nouvelle valeur pour search :${newSearch}`);
    this.setState({ search: newSearch });
  }

  setCurrency(newCurrency) {
    this.setState({ currency: newCurrency });
  }

  toggle() {
    console.log('toggle');
    this.setState({ open: !this.state.open });
  }
  
    
  render() {
    const {
      open, baseAmount, currency, search,
    } = this.state;


    const convertedAmount = this.getConvertedAmount();

    const currencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <BaseAmount amount={baseAmount} />
        <Toggler open={open} toggle={this.toggle} />
        { open && <Currencies currencies={currencies} setCurrency={this.setCurrency} search={search} setSearch={this.setSearch} /> }
        <ConvertedAmount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

export default Converter;
