import React from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
import "./category.css";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/product/subCategory/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    data = [...data, ...this.state.data];
    console.log(data);
    return (
      <div className="category">
        <Header />
        <div className="functions">
          <div>
            <label htmlFor="sortPrice">Сортировка: </label>
            <select className="select" id="sortPrice">
              <option value="1">По убыванию</option>
              <option value="2">По возрастанию</option>
            </select>
          </div>
          <div>
            <label htmlFor="department">Фильтрация: </label>
          </div>
        </div>
        <div className="categoryProducts">
          {data &&
            data.map(product => (
              <div key={product.id} className="product">
                <img
                  src="https://braggart24.ru/image/catalog/image/data/Evolution/2686/sinyaya-vysokokachestvennaya-kurtka-modeli-2686-1.jpg"
                  alt={product.name}
                />
                <div className="product_text">{product.name}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
