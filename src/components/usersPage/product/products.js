import React from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
import AddBasket from "./../basket/addBasket";
import "./product.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select: 0,
      message: "Добавить в корзину"
    };
  }

  async componentDidMount() {
    getData(`/product/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data: product, select } = this.state;
    console.log(select);
    console.log(product);

    return (
      <div className="category">
        <Header />
        {product.productInfos && product.productInfos.length ? (
          <div className="productPage">
            <div className="productImages">
              <div className="images">
                {product.productInfos[0].images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={product.name}
                    onClick={() => this.setState({ select: index })}
                  />
                ))}
              </div>
              <div className="mainImage">
                <img
                  src={product.productInfos[0].images[select].url}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="productInfo">
              <h1 className="product-title">{product.name}</h1>
              <div className="description">Кроссовки Stan Smith из кожи c мягкой подкладкой из махрового трикотажа и искусственной кожи. Удобные застежки и дышащая стелька OrthoLite® для комфорта маленьких ножек. Классические перфорированные три полоски и логотип Stan Smith на язычке.</div>
              <h3 className="price">{product.productInfos[0].unitPrice} $</h3>
              <div className="selects">
                <div className="form-group">
                  <label htmlFor="color">Color</label>
                  <select id="color" name="color" className="select">
                    {product.productInfos.map(item => (
                      <option key={item.id} value={item.color}>
                        {item.color}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="size">SIZE</label>
                  <select id="size" name="size" className="select">
                    {product.productInfos.map(item => (
                      <option key={item.id} value={item.size}>
                        {item.size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="addBasket"
                onClick={event => {
                  event.target.style.background = "green";
                  this.setState({ message: "Добавлена" });
                  AddBasket(product.id);
                }}
              >
                {this.state.message}
              </button>
            </div>
            {/* {data &&
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
            ))} */}
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}
