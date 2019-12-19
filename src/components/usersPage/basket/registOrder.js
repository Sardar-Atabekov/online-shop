import React, { Component } from "react";
import { postData } from "../../requests";

export default class RegisterOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adres: "",
      city: "",
      address: "",
      userEmail: "",
      total: this.props.total,
      orderItems: this.props.data
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      adres: "",
      city: "",
      userEmail: "",
      total: this.props.total
      // orderItems: [...this.props.data]
    });

    const data = {
      address: this.state.adres + " " + this.state.city,
      userEmail: this.state.userEmail,
      total: this.state.total
      // orderItems: this.state.orderItems
    };
    console.log(data);

    postData("/order/", data);
  };

  render() {
    return (
      <div className="mainFormRegisterOrder">
        <div className="headerFormRegisterOrder">
          <h1>Оформление заказа</h1>
        </div>
        <form
          className="formRegisterOrder"
          onSubmit={this.onSubmit}
          method="post"
        >
          <h3>Город</h3>
          <input
            type="text"
            required
            onChange={e => this.setState({ city: e.target.value })}
          />
          <h3>Адрес</h3>
          <input
            type="text"
            required
            onChange={e => this.setState({ adres: e.target.value })}
          />
          <h3>Email</h3>
          <input
            type="text"
            required
            onChange={e => this.setState({ userEmail: e.target.value })}
          />
          <br />
          <button
            type="submit"
            //  onClick={this.postData}
          >
            Оформить
          </button>
        </form>
      </div>
    );
  }
}