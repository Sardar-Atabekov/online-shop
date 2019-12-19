import React, { Component } from "react";
import Header from "../header/header";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
import Season from "./blocks/season";
import "./department.css";
import "./catalog.css";
class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/category/${2}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    let id = this.props.match.params.id;
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
              {data &&
                data.subCategories &&
                data.subCategories.map((item, index) =>
                  index < 6 ? (
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
                    <div>
                      <Link to={`/category/${item.id}`} key={item.id}>
                        <div className="catalog_block col-11">
                          <img className="catalog_img" alt="catalog-img" />
                          <div className="catalog_text_block">
                            <p className="catalog_text">MEN</p>
                          </div>
                        </div>
                      </Link>
                      <Link to={`/category/${item.id}`} key={item.id}>
                        <div className="catalog_block col-11">
                          <img className="catalog_img" alt="catalog-img" />
                          <div className="catalog_text_block">
                            <p className="catalog_text">WOMEN</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                )}
            </div>
          </div>
          <Season id={id} />
        </div>
      </div>
    );
  }
}

export default Departments;
