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

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();

    // this.setState({
    //   adres: "",
    //   city: "",
    //   userEmail: "",
    //   total: this.props.total,
    //   orderItems: this.props.data
    // });

    const data = {
      address: this.state.adres + " " + this.state.city,
      userEmail: this.state.userEmail,
      total: this.state.total,
      orderItems: this.state.orderItems,
      status: "in progressing"
    };
    console.log(data);

    postData("/order/", data);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} method="post">
        <h5>Город</h5>
        <input
          type="text"
          required
          onChange={e => this.setState({ city: e.target.value })}
        />
        <h5>Адрес</h5>
        <input
          type="text"
          required
          onChange={e => this.setState({ adres: e.target.value })}
        />
        <h5>Email</h5>
        <input
          type="text"
          required
          onChange={e => this.setState({ userEmail: e.target.value })}
        />
        <br />
        <button type="submit" onClick={this.postData}>
          Добавить
        </button>
      </form>
    );
  }
}
