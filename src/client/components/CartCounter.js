import React from 'react';
import { Row, Col, Input } from 'reactstrap';

class CartCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.productQuantity
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e){
    	this.setState(prevState => ({
      	value: Number(prevState.value) + 1
    	}), function(){
				this.props.updateQuantity(this.state.value, this.props.id);
		});
		e.preventDefault();
  };

	decrement(e){
		e.preventDefault();
		if(this.state.value <= 1){
			return this.state.value;
		}
		else{
			this.setState(prevState => ({
				value: Number(prevState.value) - 1
			}), function(){
				this.props.updateQuantity(this.state.value, this.props.id);
			});
		}
	};

  updateQuantity(qty, id) {
    this.props.updateQuantity(qty, id);
  }

  render() {
    return (
      <Row>
        <Col sm="3">
          <i className="material-icons" onClick={this.decrement}>remove_circle</i>
        </Col>
        <Col sm="4" className="cart_list_count">
          <Input size="sm"  placeholder={this.state.value} disabled="disabled" />
        </Col>
        <Col sm="3">
          <i className="material-icons" onClick={this.increment}>add_circle</i>
        </Col>
      </Row>
    )
  }
}

export default CartCounter;
