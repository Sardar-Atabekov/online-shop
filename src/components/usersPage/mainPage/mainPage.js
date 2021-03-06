import Header from "../header/header";
// import Slider from "./sliders/mainSlider";
// import Blocks from "./blocks/blocks";
import React, { useState, useEffect } from "react";
// import Slider from "./sliders/mainSlider";
import { UncontrolledCarousel } from "reactstrap";
// import "./mainPage.css";
// import Footer from "../../footer/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./mainPage.css";
import Loading from "../../loading/loading";
import Footer from "./../../footer/footer";

const items = [
  {
    src:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_electro_14.jpg",
    altText: "Slide 1",
    key: "1"
  },
  {
    src:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_dresses_14.jpg",
    altText: "Slide 2",
    key: "2"
  },
  {
    src: "https://images.wbstatic.net/poster/ru/main/c1360x370/big_pred_14.jpg",
    altText: "Slide 3",
    key: "3"
  }
];

const MainPageComponent = () => {
  const [tagData, setTagData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Axios.get(https://eshopss.herokuapp.com/tag/all).then(res => {
    //   const data = res.data;
    //   setTagData(data);
    // });
    axios
      .get(`https://my-demo-e-shop.herokuapp.com/subCategory/all`)
      .then(res => {
        const data = res.data;
        setTagData(data);
        setLoading(true);
      });
  }, []);
  console.log(tagData);
  return (
    <div>
      <div className="containerUsers">
        <Header />
        {loading ? (
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
            />
            <div className="slider_wrapper">
              <UncontrolledCarousel items={items} />
            </div>
            <div className="containerMainPage">
              <div className="leftPartOfMainPage">
                <div className="headerLeftImageMainPage">
                  <div className="topLeftLeftImageMainPage">
                    <Link to={`category/${tagData[17].id}`}>
                      <img
                        src={tagData[17].image}
                        width="265px"
                        height="330px"
                        alt="boy header"
                      />
                    </Link>
                  </div>
                  <div className="topRightLeftImageMainPage">
                    <Link to={`category/${tagData[18].id}`}>
                      <img
                        src={tagData[18].image}
                        width="265px"
                        height="330px"
                        alt="girl header"
                      />
                    </Link>
                  </div>
                </div>
                <div className="middleLeftImageMainPage">
                  <Link to={`category/${tagData[19].id}`}>
                    <img
                      src={tagData[19].image}
                      width="550px"
                      height="230px"
                      alt="girl header"
                    />
                  </Link>
                </div>
                <div className="bottomLeftImageMainPage">
                  <Link to={`category/${tagData[20].id}`}>
                    <img
                      src={tagData[20].image}
                      width="550px"
                      height="261px"
                      alt="girl header"
                    />
                  </Link>
                </div>
              </div>
              <div className="rightPartOfMainPage">
                <Link to={`category/${tagData[7].id}`}>
                  <img
                    src={tagData[7].image}
                    height="850px"
                    width="550px"
                    alt="girl-main"
                  />
                </Link>
              </div>
            </div>

            <Footer />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default MainPageComponent;
