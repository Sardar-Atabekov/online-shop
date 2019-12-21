import React, { Component } from "react";
import "./slider.css";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      images: []
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidUpdate() {}
  next() {
    let { select } = this.state;
    if (select !== 2) {
      select += 1;
      this.setState({ select });
    } else {
      select = 0;
      this.setState({ select });
    }
    console.log("next ", select);
  }
  prev() {
    let { select } = this.state;
    if (select !== 0) {
      select -= 1;
      this.setState({ select });
    } else {
      select = 2;
      this.setState({ select });
    }
    console.log("prev ", select);
  }

  render() {
    let { select } = this.state;
    let images = [
      {
        url:
          "https://images.wbstatic.net/poster/ru/main/c1360x370/big_dresses_14.jpg"
      },
      {
        url:
          "https://images.wbstatic.net/poster/ru/main/c1360x370/big_pred_14.jpg"
      },
      {
        url:
          "https://images.wbstatic.net/poster/ru/main/c1360x370/big_electro_14.jpg"
      }
    ];
    console.log(this.state);
    setTimeout(() => {
      if (select !== 2) {
        select += 1;
        this.setState({ select });
      } else {
        select = 0;
        this.setState({ select });
      }
    }, 5000);
    return (
      <div className="mainSlider">
        <div className="slideImage">
          <img
            src={images.length > 0 && images[select].url}
            alt="slideImages"
          />
        </div>
        <button onClick={this.next}> - </button>
        <button onClick={this.prev}> + </button>
      </div>
    );
  }
}

export default Slider;
