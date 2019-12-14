import React from "react";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
import Header from "./../header/header";
import "./basket.css";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/product/all/`).then(data => {
      let keys = JSON.parse(localStorage.getItem("keys"));
      let arr = [];
      if (keys) {
        keys.map(id => arr.push(...data.filter(product => product.id === id)));
      }
      this.setState({ data: arr });
    });
  }

  render() {
    let { data } = this.state;

    console.log(data);
    return (
      <div className="category">
        <Header />
        {data.length > 0 ? (
          <div className="basketWrapper">
            <div className="titleBasket">
              <h1>В КОРЗИНЕ СЕЙЧАС</h1>
            </div>
            <div className="basketContainer">
              <ul className="basketList">
                {data.map(product => (
                  <li key={product.id} className="basketProduct">
                    <div className="visual">
                      <Link
                        to={`product/${product.id}`}
                        className="j-fast-view-btn"
                      >
                        <img
                          src={product.productInfos[0].images[0].url}
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <strong className="strongTitle">
                        <Link
                          to={`product/${product.id}`}
                          className="j-fast-view-btn"
                        >
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
                          {product.inStock
                            ? "Есть в наличии"
                            : "Нету в наличии"}
                        </dt>
                      </dl>
                      <div className="mb"></div>
                      <dl>
                        <dt style={{ fontWeight: "bold" }}>1 шт</dt>
                        <dd>{product.productInfos[0].unitPrice}сом</dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="totalList">
                <div className="titleTotal">
                  <h1>ОБЩАЯ СТОИМОСТЬ</h1>
                  <span>{data.length} товара</span>
                </div>
                <div>
                  {data.map(product => (
                    <div className="priceBasket">
                      <span className="priceBasketName">{product.name}</span>
                      <span className="unitPrice">
                        {product.productInfos[0].unitPrice}сом
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="clearBasket">
            <h1>Корзина пуста</h1>
          </div>
        )}
      </div>
    );
  }
}
