import React, { Component } from "react";
import Header from "../header/header";
import Slider from "./sliders/mainSlider";
class MainPage extends Component {
  render() {
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
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          {images.map(image => (
            <Slider image={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
