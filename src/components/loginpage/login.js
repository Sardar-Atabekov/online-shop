import React, { Component } from "react";
// import { API } from "./../requests";
import "./login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });

    // let req = await fetch(`${API}/Account/Login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // });

    // const res = await req.json();
    // if (res.status === 400) {
    //   console.log(res);
    //   return this.setState({ error: res.message, status: true });
    // }
    // console.log(req);
    if (data.login == "admin") {
      // localStorage.setItem("token", res.access_token);
      // localStorage.setItem("role", +res.role);
      // console.log(res.role);
      if (data.password == "password") {
        this.props.history.push(`/admin/category`);
      } else {
        this.setState({
          error: "Неправильное имя пользователя или пароль",
          status: true
        });
      }
      // else if (+res.role === 2) {
      //   this.props.history.push(`/cook`);
      // } else if (+res.role === 4) {
      //   this.props.history.push(`/barmen`);
      // }
    } else {
      this.setState({
        error: "Неправильное имя пользователя или пароль",
        status: true
      });
    }
  }

  render() {
    return (
      <div className="loginWrapper">
        <div className="login">
          <h1>E-SHOP</h1>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <input
              className="loginInput"
              type="text"
              placeholder="Логин"
              name="login"
              required
            />
            <br />
            <input
              className="loginInput"
              type="password"
              placeholder="Пароль"
              name="password"
              required
            />
            <br />
            {this.state.status ? (
              <div className="errorMessage">{this.state.error}</div>
            ) : null}
            <br />
            <input
              className="loginInput loginBtn"
              value="Sign in"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
