import React, { Component } from "react";
import { getData } from "../requests.js";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      select: null
    };
  }

  componentDidMount() {
    getData(`https://neobiscrmfood.herokuapp.com/api/Categories/`).then(
      body => {
        this.setState({ category: body });
      }
    );
  }

  render() {
    return (
      <select id="categoryId" className="select" name="categoryId">
        {this.state.category.map(category => (
          <option value={category.id} key={category.id}>
            {category.category}
          </option>
        ))}
      </select>
    );
  }
}

export default Category;
