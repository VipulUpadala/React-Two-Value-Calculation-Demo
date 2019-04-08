import React, { Component } from "react";

class ArithMatic extends Component {
  constructor() {
    super();
    this.state = {
      firstVal: "",
      secondVal: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onSubClick = this.onSubClick.bind(this);
    this.onMultiClick = this.onMultiClick.bind(this);
    this.onDivClick = this.onDivClick.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  onAddClick() {
    this.setState({
      total: parseInt(this.state.firstVal) + parseInt(this.state.secondVal)
    });
  }
  onSubClick() {
    this.setState({
      total: parseInt(this.state.firstVal) - parseInt(this.state.secondVal)
    });
  }
  onMultiClick() {
    this.setState({
      total: parseInt(this.state.firstVal) * parseInt(this.state.secondVal)
    });
  }
  onDivClick() {
    this.setState({
      total: parseInt(this.state.firstVal) / parseInt(this.state.secondVal)
    });
  }
  render() {
    return (
      <div className="arithmatic">
        <input
          type="text"
          name="firstVal"
          value={this.state.firstVal}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="secondVal"
          value={this.state.secondVal}
          onChange={this.handleChange}
        />
        <span>{this.state.total}</span>
        <div className="buttonC">
          <button onClick={this.onAddClick}>+</button>
          <button onClick={this.onSubClick}>-</button>
          <button onClick={this.onMultiClick}>*</button>
          <button onClick={this.onDivClick}>/</button>
        </div>
      </div>
    );
  }
}
export default ArithMatic;
