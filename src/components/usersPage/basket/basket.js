import React from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
export default class CatalogPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/product/all/`).then(data => {
      let keys = JSON.parse(localStorage.getItem("keys"));
      console.log(keys);
      let arr = [];
      if (keys) {
        keys.map(id =>
          arr.push(...(data.filter(product => product.id === id)))
        );
      }
      this.setState({ data: arr });
    });
  }

  render() {
    let { data } = this.state;

    console.log(data);
    return (
      <div className="category">
        <Header />
        <div></div>
      </div>
    );
  }
}
