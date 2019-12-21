import React from "react";
import { Link } from "react-router-dom";
import Like from "./../../images/Like.png";
import noLike from "./../../images/noLike.png";
import AddLike from "./../likePage/addLike";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false
    };
  }

  render() {
    let { product } = this.props;
    return (
      <div key={product.id} className="product">
        <img
          src={this.state.like ? Like : noLike}
          alt={product.name}
          className="Like"
          onClick={() => {
            this.state.like
              ? this.setState({ like: false })
              : this.setState({ like: true });
            AddLike(product.id);
          }}
        />
        <Link to={`/product/${product.id}`} className="linkToProduct">
          {product.productInfos[0] &&
          product.productInfos[0].images[0] &&
          product.productInfos[0].images[0].url ? (
            <img
              src={product.productInfos[0].images[0].url}
              alt={product.name}
              className="productImage"
            />
          ) : (
            "false"
          )}
          <div className="product_text">{product.name}</div>
          <div className="product_price">
            {product.productInfos[0] &&
              product.productInfos[0].unitPrice &&
              product.productInfos[0].unitPrice}{" "}
            сом
          </div>
        </Link>
      </div>
    );
  }
}
