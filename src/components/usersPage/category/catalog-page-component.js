import React from "react";
import { getData } from "../../requests.js";

// import { Link } from "react-router-dom";

import "./catalog.css";
import catalogImg from "./img/catalog1.jpg";
import catalogImg2 from "./img/catalog2.jpg";
import catalogImg3 from "./img/catalog3.jpg";
import catalogImg4 from "./img/catalog4.jpg";
import catalogImg5 from "./img/catalog5.jpg";
import catalogImg6 from "./img/catalog6.jpg";

export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  async componentDidMount() {
    getData(`/category/${this.props.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <div className="catalog">
          <div className="catalog_items_wrapper container row">
            <h3 className=" catalog_title col-12">
              Мы выбрали лучшие решения для того чтобы подчеркнуть Твой стиль!
              <br />
              Выбор за Тобой!
            </h3>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              <img className="catalog_img" src={catalogImg} alt="catalog-img" />
              <div className="catalog_text_block">
                <p className="catalog_text">джинсы</p>
              </div>
            </div>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              <img
                className="catalog_img"
                src={catalogImg2}
                alt="catalog-img"
              />
              <div className="catalog_text_block">
                <p className="catalog_text">обувь</p>
              </div>
            </div>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              <img
                className="catalog_img"
                src={catalogImg3}
                alt="catalog-img"
              />
              <div className="catalog_text_block">
                <p className="catalog_text">куртки и жакеты</p>
              </div>
            </div>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              {/* <Link to={`/catalog`}> */}
                <img
                  className="catalog_img"
                  src={catalogImg4}
                  alt="catalog-img"
                />
              {/* </Link> */}
              <div className="catalog_text_block">
                <p className="catalog_text">худи и джемперы</p>
              </div>
            </div>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              <img
                className="catalog_img"
                src={catalogImg5}
                alt="catalog-img"
              />
              <div className="catalog_text_block">
                <p className="catalog_text">футболки и майки</p>
              </div>
            </div>

            <div className="catalog_block col-11 col-md-6 col-lg-2">
              <img
                className="catalog_img"
                src={catalogImg6}
                alt="catalog-img"
              />
              <div className="catalog_text_block">
                <p className="catalog_text">классика и "кэжуал"</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
