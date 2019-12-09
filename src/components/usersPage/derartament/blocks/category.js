import React from "react";
import { getData } from "../../../requests.js";
import { Link } from "react-router-dom";
import "./../catalog.css";

class CategoryBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidUpdate() {
    getData(`/category/${this.props.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    // let data = this.state.data.filter(item => item.active);

    return (
      <div className="catalog">
        <h3 className="catalog_title col-12">
          Мы выбрали лучшие решения для того чтобы подчеркнуть Твой стиль!
          <br />
          Выбор за Тобой!
        </h3>
        <div className="catalog_items_wrapper container">
          {data.subCategories &&
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
                false
              )
            )}
        </div>
      </div>
    );
  }
}

export default CategoryBlock;
