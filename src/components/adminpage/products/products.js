import React, { Component } from "react";
import { getData, deleteData } from "../../requests";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import NamePage from "../blocks/namePage";
import "./products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      data: [],
      select: null,
      dp: [],
      category: []
    };

    this.categoryName = this.categoryName.bind(this);
  }

  async componentDidMount() {
    getData("/product/all/").then(body => {
      this.setState({ body });
    });
    getData("/subCategory/all/").then(category => {
      this.setState({ category });
      console.log(category);
    });
    getData("/category/all/").then(dp => {
      this.setState({ dp });
      this.setState({ select: dp[0].id });
    });
  }

  categoryName(id) {
    let name =
      this.state.category.length > 0 &&
      this.state.category.filter(category => category.id === id)[0].name;
    return name;
  }

  render() {
    let data = this.state.body;
    // let { dp } = this.state;
    console.log(this.state);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="containerAdmin">
          <header className="main-search">
            <Search />
          </header>
          <main className="productsPage">
            <div className="addProducts">
              <NamePage name="Products Page" />
              <Link to={"addProduct"}>Добавить</Link>
              <div className="filterProduct">
                {/* <div className="form-group">
                  <label htmlFor="inCategory">Категория</label>
                  <select
                    id="inCategory"
                    name="inCategory"
                    className="select"
                    required
                    onChange={e => this.setState({ selectCt: e.target.value })}
                  >
                    {dp.length > 0
                      ? dp.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))
                      : ""}
                  </select>
                </div> */}
              </div>
            </div>
            <div className="listItem">
              {data &&
                data.map(product => (
                  <div className="item" key={product.id}>
                    <Link to={`/product/${product.id}`} className="imageLink">
                      <img
                        src={product.productInfos[0].images[0].url}
                        alt={product.name}
                      />
                    </Link>

                    <input
                      type="text"
                      className="input  imageInput"
                      defaultValue={product.name}
                    />
                    <select
                      className="select active"
                      name="name"
                      defaultValue={product.inStock}
                    >
                      <option value="true">Есть</option>
                      <option value="false">Скрыта</option>
                    </select>
                    {/* <div className="">{this.categoryName(product.subCategory)}</div> */}
                    <Link
                      to={`product/${product.id}/`}
                      className="changeBtn"
                    >
                      Изменить
                    </Link>
                    <input
                      type="button"
                      className="deleteBtn divDelete"
                      value="Удалить"
                      onClick={event => {
                        deleteData(`/product/${product.id}`);
                        event.target.parentNode.remove();
                      }}
                    />
                  </div>
                ))}
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Products;
