import React, { Component } from "react";
import { getData } from "../../requests.js";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getData(`/category/all`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let { data } = this.state;
    return (
      <select className="select" name="category_id">
        {data &&
          data.map(department => (
            <option value={department.id} key={department.id}>
              {department.name}
            </option>
          ))}
      </select>
    );
  }
}

export default Department;
