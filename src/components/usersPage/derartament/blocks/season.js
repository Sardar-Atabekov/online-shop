import React from "react";
import { getData } from "../../../requests.js";
// import { Link } from "react-router-dom";
import seasonImg1 from "./../img/season1.jpg";
import seasonImg2 from "./../img/season2.jpg";
import seasonImg3 from "./../img/season3.jpg";
class CategoryBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  // async componentDidMount() {
  //   getData(`/category/${this.props.id}`).then(data => {
  //     this.setState({ data });
  //   });
  // }

  render() {
    let { data } = this.state;
    console.log(data);
    // let data = this.state.data.filter(item => item.active);

    return (
      <div className="seasonsContainer">
        <div className="seasons">
          <h4 className="seasons_title">сезонные решения</h4>

          <div className="season">
            <img className="card-img-top" src={seasonImg1} alt="seasonImage" />
            <div className="card-body seasons_text_block">Лето</div>
          </div>

          <div className="season">
            <img className="card-img-top" src={seasonImg2} alt="seasonImage" />
            <div className="card-body seasons_text_block">Зима</div>
          </div>

          <div className="season">
            <img className="card-img-top" src={seasonImg3} alt="seasonImage" />
            <div className="card-body seasons_text_block ">Осень/весна</div>
          </div>
        </div>
        <div className="seasons-see">
          <button className=" seasons-btn btn btn-dark">смотреть все</button>
        </div>
      </div>
    );
  }
}

export default CategoryBlock;
