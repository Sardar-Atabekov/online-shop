import React, { Component } from "react";
import { getData } from "../../requests.js";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select: props.select
    };
  }

  componentDidMount() {
    getData(`/category/all`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let select;
    if (this.state.select ) {
      select = this.state.select;
    } else {
      select =false;
    }
    console.log(select);
    return (
      <select
        className="select"
        name="category_id"
        defaultValue={select}
      >
        {this.state.data.map(department => (
          <option value={department.id} key={department.id}>
            {department.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Department;
