import React, { Component } from "react";
import "./blocks.css";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      images: []
    };
  }

  render() {
    return (
      <div className="blocks">
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
        <div className="mainBlock">
          <img
            src="https://ae01.alicdn.com/kf/HTB1Ch0ySVXXXXamXFXXq6xXFXXXI.jpg_q50.jpg"
            className="mainBlockImage"
            alt="mainBlockImage"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
