import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PaymentFilter extends Component {
  static PAYMENT_OPTIONS = ['AMEX', 'Discover', 'MasterCard', 'Visa']

  constructor(props) {
   super(props);

   this.state = {
     activePayment: null,
   }
  }

  updatePayment = (e) => {
    e.preventDefault();

    if (this.state.activePayment === e.target.value) {
      // Resets the payment filter if already active
      this.setState({activePayment: null});
      this.props.updatePayment('');
    } else {
      this.setState({activePayment: e.target.value});
      this.props.updatePayment(e.target.value);
    }
  }

  active = (paymentType) => {
    if (this.state.activePayment === paymentType) {
      return 'active';
    }
  }

  renderPaymentOptions = () => {
    return PaymentFilter.PAYMENT_OPTIONS.map((opt, idx) => {
      return(
        <Button outline color="info" key={idx} className={'d-block w-100 mb-1' + this.active(opt)}
          value={opt}
          onClick={this.updatePayment.bind(this)}
        >
          {opt}
        </Button>
      )
    })
  }

  render() {
    const paymentOptions = this.renderPaymentOptions();
    return (
      <div>
        <h4> Payment Options </h4>
        {paymentOptions}
      </div>
    );
  }

}
