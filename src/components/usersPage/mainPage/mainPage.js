import Header from "../header/header";
// import Slider from "./sliders/mainSlider";
// import Blocks from "./blocks/blocks";
import React, { useState, useEffect } from "react";
import Slider from "./sliders/mainSlider";
// import { UncontrolledCarousel } from "reactstrap";
// import "./mainPage.css";
// import Footer from "../../footer/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./mainPage.css";

const MainPageComponent = () => {
  const [tagData, setTagData] = useState({});

  useEffect(() => {
    // Axios.get(https://eshopss.herokuapp.com/tag/all).then(res => {
    //   const data = res.data;
    //   setTagData(data);
    // });
    axios.get(`https://eshopss.herokuapp.com/tag/all`).then(res => {
      const data = res.data;
      setTagData(data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="slider_wrapper">
        <Slider />
      </div>

      <div className="containerMainPage">
        <div className="leftPartOfMainPage">
          <div className="headerLeftImageMainPage">
            <div className="topLeftLeftImageMainPage">
              <img
                src="https://st.depositphotos.com/1000824/5031/i/950/depositphotos_50311455-stock-photo-beautiful-young-woman-in-colorful.jpg"
                width="265px"
                height="330px"
                alt="boy header"
              />
            </div>
            <div className="topRightLeftImageMainPage">
              <img
                src="https://st.depositphotos.com/1480128/2921/i/950/depositphotos_29212687-stock-photo-teenager-girl-in-a-dress.jpg"
                width="265px"
                height="330px"
                alt="girl header"
              />
            </div>
          </div>
          <div className="middleLeftImageMainPage">
            <img
              src="https://odezhda.guru/wp-content/uploads/2018/05/Muzhskaya-odezhda-2.jpg"
              width="550px"
              height="230px"
              alt="girl header"
            />
          </div>
          <div className="bottomLeftImageMainPage">
            <img
              src="https://images.unsplash.com/photo-1573649027949-e83a2e6451b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              width="550px"
              height="261px"
              alt="girl header"
            />
          </div>
        </div>
        <div className="rightPartOfMainPage">
          <img
            src="https://st2.depositphotos.com/5242463/10028/i/950/depositphotos_100280612-stock-photo-a-young-woman-walking-at.jpg"
            height="850px"
            width="550px"
            alt="girl-main"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
