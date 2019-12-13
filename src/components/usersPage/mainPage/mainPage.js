import React, { Component } from "react";
import Header from "../header/header";
import Slider from "./sliders/mainSlider";
import Blocks from "./blocks/blocks";
class MainPage extends Component {
  render() {
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          <Slider />
          <Blocks />
        </div>
      </div>
    );
  }
}

export default MainPage;
