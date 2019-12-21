import React from "react";
import { Link } from "react-router-dom";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: null,
      message: null,
      isInCreation: false,
      isLoading: false
    };
    this.deleteInBasket = this.deleteInBasket.bind(this);
  }

  deleteInBasket(id) {
    let { data } = this.state;
    data = data.filter(item => item.id !== +id);
    let keys = JSON.parse(localStorage.getItem("keys"));
    keys = keys.filter(a => a !== id);
    console.log(keys);
    localStorage.removeItem("keys");
    localStorage.getItem("keys", JSON.stringify(keys));
    console.log(data);
    this.setState({ data });
    this.setState({ message: "Корзина пуста" });
  }

  render() {
    let product = this.props.product;

    return (
      <li key={product.id} className="basketProduct">
        <div className="visual">
          <Link to={`product/${product.id}`} className="j-fast-view-btn">
            <img
              src={product.productInfos[0].images[0].url}
              alt={product.name}
            />
          </Link>
        </div>
        <div className="content">
          <strong className="strongTitle">
            <Link to={`product/${product.id}`} className="j-fast-view-btn">
              {product.name}
            </Link>
          </strong>
          <div className="mb"></div>
          <dl>
            <dt>Цвет: </dt>
            <dd> {product.productInfos[0].color}</dd>
          </dl>
          <dl>
            <dt>Размер:</dt>
            <dd>{product.productInfos[0].size}</dd>
          </dl>
          <dl>
            <dt className="availability">
              {product.inStock ? "Есть в наличии" : "Нету в наличии"}
            </dt>
          </dl>
          <div className="mb"></div>
          <dl>
            <dt style={{ fontWeight: "bold" }}>1 шт</dt>
            <dd>{product.productInfos[0].unitPrice}сом</dd>
          </dl>
        </div>
        <div
          className="deleteInBasket"
          onClick={() => this.deleteInBasket(product.id)}
        >
          Удалить
        </div>
      </li>
    );
  }
}
