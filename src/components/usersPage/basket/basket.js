import React from "react";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
import Loading from "./../../loading/loading";
import Header from "./../header/header";
import RegisterOrder from "./registOrder";
import "./basket.css";
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

  async componentDidMount() {
    getData(`/product/all/`).then(data => {
      let keys = JSON.parse(localStorage.getItem("keys"));
      let arr = [],
        total,
        initialValue = 0;
      if (keys) {
        keys.map(id => arr.push(...data.filter(product => product.id === id)));
      }
      total = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.productInfos[0].unitPrice;
      }, initialValue);
      this.setState({ total });
      if (arr.length > 0) {
        this.setState({ data: arr, isLoading: true });
      } else {
        this.setState({ message: "Корзина пуста", isLoading: true });
      }
    });
  }

  deleteInBasket(id) {
    let { data } = this.state;
    console.log(data);
    data = data.filter(item => item.id !== +id);
    let keys = JSON.parse(localStorage.getItem("keys"));
    keys = keys.filter(a => a !== id);
    console.log(keys);
    localStorage.setItem("keys", JSON.stringify(keys));
    console.log(data);
    this.setState({ data });
    this.setState({ message: "Корзина пуста" });
  }
  render() {
    let { data, isInCreation } = this.state;

    console.log(data);
    return (
      <div className="category">
        <Header />
        {this.state.isLoading ? (
          data.length === 0 ? (
            <div className="clearBasket">
              <h1>{this.state.message}</h1>
            </div>
          ) : (
            <div>
              <div className="totalList">
                <div className="titleTotal">
                  <h1>ОБЩАЯ СТОИМОСТЬ</h1>
                  <span>{data.length} товара</span>
                </div>
                <div className="priceBasketWrapper">
                  {data.map(product => (
                    <div className="priceBasket" key={product.id}>
                      <span className="priceBasketName">{product.name}</span>
                      <span className="unitPrice">
                        {product.productInfos[0].unitPrice} сом
                      </span>
                    </div>
                  ))}
                  <div className="priceBasket">
                    <span>ИТОГО</span>
                    <span>{this.state.total}</span>
                  </div>

                  <div>
                    {isInCreation === false ? (
                      <div className="madeOrderBasket">
                        <button
                          onClick={() => this.setState({ isInCreation: true })}
                          className="madeOrderBasketButton"
                        >
                          Оформить Заказ
                        </button>
                      </div>
                    ) : (
                      <div className="madeOrderBasket">
                        <button
                          onClick={() => this.setState({ isInCreation: false })}
                          className="madeOrderBasketButton"
                        >
                          Отмена
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {isInCreation === false ? (
                  <div>
                    {" "}
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
                                  <dd>
                                    {product.productInfos[0].unitPrice}сом
                                  </dd>
                                </dl>
                              </div>
                              <div
                                className="deleteInBasket"
                                onClick={() => this.deleteInBasket(product.id)}
                              >
                                Удалить
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <RegisterOrder
                    data={this.state.data}
                    total={this.state.total}
                  />
                )}
              </div>
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
