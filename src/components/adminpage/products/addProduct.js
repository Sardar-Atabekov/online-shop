import React, { Component } from "react";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import "./addProduct.css";
class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
      error: null,
      message: "Правильно введите данные!",
      status: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });

    console.log(data);
    let target = event.target;
    fetch(`https://neobiscrmfood.herokuapp.com/api/users`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      console.log(e);
      if (e.ok) {
        this.setState({
          message: "Данные успешно добавлены!",
          status: true
        });
        target.reset();
      } else {
        this.setState({
          message: "Ошибка. Проверьте введенные данные"
        });
        this.setState({
          status: true
        });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="containerAdmin">
          <header className="main-search">
            <Search />
          </header>
          <main className="addProductContent">
            <div className="card-header p-0">
              <div className="edit-user-details__bg">
                <img
                  src="https://www.texasheart.org/wp-content/uploads/2018/08/thi-christmas-lights-defocused-background-Bokeh-Gold-Blue.jpg"
                  alt="BackgroundImage"
                />
              </div>
            </div>
            <div className="formBlock">
              <div className="title-block">
                <div className="form-title">
                  <h6 className="form-text">Product info</h6>
                  <p className="form-text">
                    Configure general product info information
                  </p>
                </div>
              </div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Названия</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inStock">В наличии</label>
                    <select id="inStock" name="inStock" className="select">
                      <option value="true">Есть</option>
                      <option value="false">Скрыта</option>
                    </select>
                  </div>

                 
                  
                 

                  
                </div>

                
                
                <input type="button" value="Добавить" />
              </form>
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default addProduct;
