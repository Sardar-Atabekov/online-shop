import React from "react";
import { getData } from "../../requests.js";
import Loading from "../../loading/loading";
import Header from "../header/header";
import { Link } from "react-router-dom";
import "./likes.css";
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
      let likes = JSON.parse(localStorage.getItem("likes"));
      console.log(likes);
      let arr = [];
      if (likes) {
        likes.map(id => arr.push(...data.filter(product => product.id === id)));
      }

      if (arr.length > 0) {
        this.setState({ data: arr, isLoading: true });
      } else {
        this.setState({ message: "Пуста", isLoading: true });
      }
    });
  }

  deleteInBasket(id) {
    let { data } = this.state;
    data = data.filter(item => item.id !== +id);
    let likes = JSON.parse(localStorage.getItem("likes"));
    likes = likes.filter(a => a !== id);
    console.log(likes);
    localStorage.setItem("likes", JSON.stringify(likes));
    this.setState({ data });
    this.setState({ message: "Пуста" });
  }
  render() {
    let { data } = this.state;

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
            <div className="likesPage">
              {data.map(product => (
                <div className="productLikeBlock" key={product.id}>
                  <Link
                    key={product.id}
                    to={`product/${product.id}`}
                    className="productLike"
                  >
                    <img
                      src={product.productInfos[0].images[0].url}
                      alt={product.name}
                    />
                  </Link>
                  <button
                    className="deleteInLikes"
                    onClick={() => this.deleteInBasket(product.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
