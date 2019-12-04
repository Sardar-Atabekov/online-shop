import React from "react";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
import Header from "./../header/header";
import "./category.css";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/product/subCategory/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    return (
      <div className="category">
        <Header />
        <div className="functions">
          <div>
            <label htmlFor="sortPrice">Сортировка: </label>
            <select className="select" id="sortPrice">
              <option value="1">По убыванию</option>
              <option value="2">По возрастанию</option>
            </select>
          </div>
          <div>
            <label htmlFor="department">Фильтрация: </label>
          </div>
        </div>
        <div className="categoryProducts">
          {data &&
            data.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product"
              >
                {console.log(product)}
                {product.productInfos[0] &&
                product.productInfos[0].images[0] &&
                product.productInfos[0].images[0].url ? (
                  <img
                    src={product.productInfos[0].images[0].url}
                    alt={product.name}
                  />
                ) : (
                  "false"
                )}
                <div className="product_text">{product.name}</div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}
