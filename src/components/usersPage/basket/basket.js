import React from "react";
import { getData } from "../../requests.js";
import { Link } from "react-router-dom";
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
    // let { data } = this.state;
    return (
      <div className="category">
        <Header />
      </div>
    );
  }
}
