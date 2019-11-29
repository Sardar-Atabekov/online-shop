import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import { getData } from "../../requests.js";
import "./catalog.css";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    getData(`/category/${id}`).then(data => {
      this.setState({ data });
    });
  }
  render() {
    let { data } = this.state;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          <div className="catalog">
            <h3 className="catalog_title col-12">
              Мы выбрали лучшие решения для того чтобы подчеркнуть Твой стиль!
              <br />
              Выбор за Тобой!
            </h3>
            <div className="catalog_items_wrapper container">
              {data.subCategories &&
                data.subCategories.map((item, index) =>
                  index < 5 ? (
                    <Link to={`/category/${item.id}`} key={item.id}>
                      <div className="catalog_block col-11">
                        <img
                          className="catalog_img"
                          src={item.image}
                          alt="catalog-img"
                        />
                        <div className="catalog_text_block">
                          <p className="catalog_text">{item.name}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    false
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Departments;
