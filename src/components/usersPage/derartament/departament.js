import React, { Component } from "react";
import Header from "../header/header";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
import "./department.css";
import "./catalog.css";
import Loading from "../../loading/loading";
import Footer from "./../../footer/footer";
class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    getData(`/category/1`).then(data => {
      console.log(data);
      this.setState({ data, isLoading: true });
    });
  }

  render() {
    let { data } = this.state;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          <div
            className="catalog"
            style={{
              width: "100%",
              minHeight: "450px",
              background: `url(https://i.imgur.com/zSVbdhA.jpg)no-repeat`,
              margin: "0 auto",
              backgroundSize: "100%"
            }}
          >
            <h3 className="catalog_title col-12">
              Мы выбрали лучшие решения для того чтобы подчеркнуть Твой стиль!
              <br />
              Выбор за Тобой!
            </h3>
            {this.state.isLoading ? (
              <div className="catalog_items_wrapper container">
                {data &&
                  data.subCategories &&
                  data.subCategories.map((item, index) =>
                    index < 9 && !item.description ? (
                      <Link to={`/category/${item.id}`} key={item.id}>
                        {console.log(index)}
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
                    ) : null
                  )}
              </div>
            ) : (
              <Loading />
            )}
          </div>
          <div className="seasonsContainer">
            <div className="seasons">
              <h4 className="seasons_title">сезонные решения</h4>
              {data &&
                data.subCategories &&
                data.subCategories.map((item, index) =>
                  index < 3 && item.description ? (
                    <Link
                      to={`/category/${item.id}`}
                      key={item.id}
                      className="season"
                    >
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt="seasonImage"
                      />
                      <div className="card-body seasons_text_block">
                        {item.name}
                      </div>
                    </Link>
                  ) : null
                )}
              {/* <div className="season">
                <img
                  className="card-img-top"
                  src={seasonImg2}
                  alt="seasonImage"
                />
                <div className="card-body seasons_text_block">Зима</div>
              </div>

              <div className="season">
                <img
                  className="card-img-top"
                  src={seasonImg3}
                  alt="seasonImage"
                />
                <div className="card-body seasons_text_block ">Осень/весна</div>
                  </div>*/}
            </div>
            <div className="seasons-see">
              <button className=" seasons-btn btn btn-dark">
                смотреть все
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Departments;
