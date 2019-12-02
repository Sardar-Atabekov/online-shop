import React from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
import addBasket from "./../basket/addBasket";
import "./product.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/product/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data: product } = this.state;
    console.log(product);
    return (
      <div className="category">
        <Header />
        {product.productInfos && product.productInfos.length ? (
          <div className="productPage">
            <div className="productImages">
              <div className="images">
                <img
                  alt={product.name}
                  src="https://lmnop.kg/image/cache/catalog/Products1/MUJ%20Odejda/Kurtki/Li-Ning/AYMM085-3/123-800x600.jpg"
                />
                <img
                  alt={product.name}
                  src="https://lmnop.kg/image/cache/catalog/Products1/MUJ%20Odejda/Kurtki/Li-Ning/AYMM085-3/123-800x600.jpg"
                />
                <img
                  alt={product.name}
                  src="https://lmnop.kg/image/cache/catalog/Products1/MUJ%20Odejda/Kurtki/Li-Ning/AYMM085-3/123-800x600.jpg"
                />
                <img
                  alt={product.name}
                  src="https://lmnop.kg/image/cache/catalog/Products1/MUJ%20Odejda/Kurtki/Li-Ning/AYMM085-3/123-800x600.jpg"
                />
              </div>
              <div className="mainImage">
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
              <button className="addBasket" onClick={()=>addBasket(product.id)}>Добавить в корзину</button>
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
