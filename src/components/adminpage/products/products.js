import React, { Component } from "react";
import { getData, putData, deleteData } from "../../requests";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
// import Category from "./addCategory";

// import "./categories.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      data: [],
      dp: []
    };

    this.changeSelectDepartment = this.changeSelectDepartment.bind(this);
  }

  changeCategoryClick(event) {
    let id = event.target.getAttribute("id"),
      data = {
        id,
        active: event.target.parentNode.childNodes[2].value,
        name: event.target.parentNode.childNodes[1].value,
        category_id: event.target.previousSibling.value,
        image: event.target.parentNode.childNodes[3].value
      };

    console.log(data);
    putData(`/subCategory/${data.id}`, data);
  }

  changeSelectDepartment(event) {
    let select = event.target.value,
      arr = this.state.body;
    if (select === "all") {
      this.setState({ data: arr });
    } else {
      arr = arr.filter(department => department.category_id === +select);
      this.setState({
        data: arr
      });
    }
  }
  async componentDidMount() {
    getData("/product/all/").then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="categoriesContent">
            <div className="addProducts">
              
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Названия</th>

                  <th>Категория</th>
                  <th>Статус</th>
                  <th>Ед. изм.</th>
                  <th>Цена</th>
                  <th colSpan="2">Операции</th>
                </tr>
                {data.length>0&&data.map(product => (
                  <tr key={product.id}>
                    <td>
                      <Link to={{ pathname: `/product/${product.id}/` }}>
                        {product.name}
                      </Link>
                    </td>

                    <td>{product.category}</td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          onChange={() => {
                            putData(`/admin/changeproductStatus/${product.id}`);
                          }}
                          defaultChecked={
                            product.status === "Have" ? true : false
                          }
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>{product.weight}</td>
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
