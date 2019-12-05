import React, { Component } from "react";
import "./slider.css";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      images:[]
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidUpdate() {
    
  }
  next() {
    let { select } = this.state;
    if (select !== 4) {
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
      select = 4;
      this.setState({ select });
    }
    console.log("prev ", select);
  }

  render() {
    let { select, images } = this.state;
    images.push(this.props.image);
    this.setState({images});
    console.log(this.state);
    return (
      <div className="mainSlider">
        <div className="slideImage">
          <img src={images.length>0&&images[select].url} alt="slideImages" />
        </div>
        <button onClick={this.next}>1 </button>
        <button onClick={this.prev}>2 </button>
      </div>
    );
  }
}

export default Slider;
