import React, { Component } from "react";
import { getData, putData, deleteData } from "../../requests";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import NamePage from "../blocks/namePage";
import "./products.css";
// import Category from "./addCategory";

// import "./categories.css";

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
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Названия</th>

                  <th>Категория</th>
                  <th>Статус</th>
                  <th>Цена</th>
                  <th colSpan="2">Операции</th>
                </tr>
                {data.length > 0 &&
                  data.map(product => (
                    <tr key={product.id}>
                      <td>
                        <Link to={{ pathname: `/product/${product.id}/` }}>
                          {product.name}
                        </Link>
                      </td>

                      <td>{this.categoryName(product.subCategory)}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            onChange={() => {
                              putData(
                                `/admin/changeproductStatus/${product.id}`
                              );
                            }}
                            defaultChecked={
                              product.status === "Have" ? true : false
                            }
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td>{product.price} сом</td>
                      <td>
                        <Link to={{ pathname: `/product/${product.id}/` }}>
                          Изменить
                        </Link>
                      </td>
                      <td
                        className="deleteProduct"
                        onClick={event => {
                          deleteData(`/product/${product.id}`);
                          event.target.parentNode.remove();
                        }}
                      >
                        Удалить
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
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
