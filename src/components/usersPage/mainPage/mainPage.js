import Header from "../header/header";
// import Slider from "./sliders/mainSlider";
// import Blocks from "./blocks/blocks";
import React, { useEffect } from "react";
import Slider from "./sliders/mainSlider";
// import { UncontrolledCarousel } from "reactstrap";
// import "./mainPage.css";
// import Footer from "../../footer/footer";
// import axios from "axios";
// import { Link } from "react-router-dom";

const MainPageComponent = () => {
  // const [tagData, setTagData] = useState({});

  useEffect(() => {
    // Axios.get(https://eshopss.herokuapp.com/tag/all).then(res => {
    //   const data = res.data;
    //   setTagData(data);
    // });
    // axios.get(`https://eshopss.herokuapp.com/tag/all`).then(res => {
    //   const data = res.data;
    //   setTagData(data);
    // });
  }, []);
  return (
    <div>
      <Header />
      <div className="slider_wrapper">
        <Slider />
      </div>
      {/* <div className="container1 row my-5 ">
        <div className="col-6 row">
          <div className="col-6 mb-3 ">
            {tagData.length > 0 ? (
              <Link to={`/tag/${tagData[0].id}`}>
                <img
                  src={tagData[0].image}
                  alt="tagImage"
                  className="tag-images"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="col-6 mb-3">
            {tagData.length > 0 ? (
              <Link to={`/tag/${tagData[1].id}`}>
                <img
                  src={tagData[1].image}
                  alt="collection img"
                  className="tag-images"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 my-2 ">
            {tagData.length > 0 ? (
              <Link to={`/tag/${tagData[3].id}`}>
                <img
                  src={tagData[3].image}
                  alt="collection img"
                  className="tag-images"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 my-3">
            {tagData.length > 0 ? (
              <Link to={`/tag/${tagData[2].id}`}>
                <img
                  src={tagData[2].image}
                  alt="collection img"
                  className="tag-images"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-6 row">
          <div className="col-12 mb-3 ">
            {tagData.length > 0 ? (
              <Link to={`/tag/${tagData[4].id}`}>
                <img
                  src={tagData[4].image}
                  alt="collection img"
                  className="tag-images"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainPageComponent;
