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
    let { select } = this.state;
    let images = [
      {
        url:
          "https://static5.bolf.ua/rus_pm_%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D0%B0%D1%8F-%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-Bolf-1108-75138_5.jpg"
      },
      {
        url:
          "https://lp2.hm.com/hmgoepprod?set=source[/ea/f7/eaf72b0ad554090c75652ea73838da48651fd3b0.jpg],origin[dam],category[kids_girl14y_jumperscardigans_hoodiessweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
      },
      {
        url:
          "https://lp2.hm.com/hmgoepprod?set=source[/03/11/0311b60dddf1397daa11a31d943f11b99671fe2b.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
      },
      {
        url:
          "https://i.pinimg.com/originals/a9/9d/ac/a99dac25d6b180ef38dd01b549b41c08.jpg"
      },
      {
        url: "https://images.izi.ua/3309361"
      }
    ];
    console.log(this.state);
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
