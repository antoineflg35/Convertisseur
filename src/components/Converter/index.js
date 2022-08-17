/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import './styles.scss';
import React from 'react';
import currenciesData from 'src/data/currencies';
import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Currencies from '../Currencies';

class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle');
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;

    return (
      <div className="converter">
        <BaseAmount amount={2} />
        <button type="button" onClick={this.toggle}>
          toggle
        </button>
        { open && <Currencies currencies={currenciesData} /> }
        <ConvertedAmount amount={1.08} currency="USA" />
      </div>
    );
  }
}

export default Converter;
