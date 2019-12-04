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
      select: 0
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
    let images = [
      {
        url:
          "https://static5.bolf.ua/rus_pm_%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D0%B0%D1%8F-%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-Bolf-1108-75138_5.jpg"
      },
      {
        url:
          "https://lp2.hm.com/hmgoepprod?set=source[/ea/f7/eaf72b0ad554090c75652ea73838da48651fd3b0.jpg],origin[dam],category[kids_girl14y_jumperscardigans_hoodiessweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
      },
      {
        url:
          "https://lp2.hm.com/hmgoepprod?set=source[/03/11/0311b60dddf1397daa11a31d943f11b99671fe2b.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
      },
      {
        url:
          "https://i.pinimg.com/originals/a9/9d/ac/a99dac25d6b180ef38dd01b549b41c08.jpg"
      },
      {
        url: "https://images.izi.ua/3309361"
      }
    ];
    return (
      <div className="category">
        <Header />
        {product.productInfos && product.productInfos.length ? (
          <div className="productPage">
            <div className="productImages">
              <div className="images">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={product.name}
                    onClick={() => this.setState({ select: index })}
                  />
                ))}
              </div>
              <div className="mainImage">
                <img src={images[select].url} alt={product.name} />
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
              <button
                className="addBasket"
                onClick={() => AddBasket(product.id)}
              >
                Добавить в корзину
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
