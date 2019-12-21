import React from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
import AddBasket from "./../basket/addBasket";
import AddLike from "./../likePage/addLike";
import Like from "./../../images/Like.png";
import noLike from "./../../images/noLike.png";
import Footer from "./../../footer/footer";
import "./product.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select: 0,
      message: "Добавить в корзину",
      messageLike: "Добавить в избранные",
      like: false
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
          <div>
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
                <div className="description">{product.description}</div>
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
                <div className="likesBasket">
                  <div className="LikeBasketBlock">
                    <img
                      src={this.state.like ? Like : noLike}
                      alt={product.name}
                      className="LikeImage"
                      onClick={() => {
                        this.state.like
                          ? this.setState({ like: false })
                          : this.setState({ like: true });
                        AddLike(product.id);
                      }}
                    />
                  </div>
                  <button
                    className="addBasket"
                    onClick={event => {
                      event.target.style.background = "green";
                      this.setState({ message: "Добавлено" });
                      AddBasket(product.id);
                    }}
                  >
                    {this.state.message}
                  </button>
                </div>
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
            <Footer />
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}
