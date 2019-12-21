import React, { Component } from "react";
import { postData } from "../../requests";
import ModalWindow from "./../../modalWindow/modalWindow";
export default class RegisterOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adres: "",
      city: "",
      address: "",
      userEmail: "",
      total: this.props.total,
      orderItems: this.props.data,
      statusModal: false
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
      total: this.state.total,
      orderItems: [
        {
          id: this.state.orderItems.id,
          price: 0,
          product: 0,
          quantity: 2,
          total: 0
        }
      ]
    };
    console.log(data);
    this.setState({ statusModal: true });
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
        {this.state.statusModal ? (
          <ModalWindow
            statusModal={() => this.setState({ statusModal: false })}
          />
        ) : null}
      </div>
    );
  }
}
