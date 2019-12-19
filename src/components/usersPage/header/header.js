import React from "react";
import { getData } from "../../requests.js";

import { Link } from "react-router-dom";

import Eshoplogo from "./img/e-shop(logo).svg";
import Person from "./img/Person.svg";
import Heart from "./img/l.svg";
import Cart from "./img/pocket.svg";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`/category/all`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    let data = this.state.data && this.state.data.filter(item => item.active);

    return (
      <header>
        <div className="header_top">
          <div className="container">
            <div className="offset-2">
              <div>
                <Link to={"/"} className="header_top_link">
                  О нас{" "}
                </Link>
              </div>
              <div>
                <Link to={"/"} className="header_top_link">
                  Блог
                </Link>
              </div>
              <div>
                <Link to={"/"} className="header_top_link">
                  Контакты
                </Link>
              </div>
            </div>

            <div className="offset-2">
              <div className="header_tel">+996 XXX XXX XXX</div>
              <div className="header_tel">+996 XXX XXX XXX</div>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="row">
            <div className="col-2">
              <Link to="/" className="header_link">
                <img src={Eshoplogo} alt="logo" className="header_logo" />
              </Link>
            </div>
            <div className="departmentsLinks">
              {data ? (
                data.map((item, index) =>
                  index < 2 ? (
                    <div className="header_link-block">
                      <Link
                        className="header_link"
                        to={`/department/${item.id}`}
                        key={item.id}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : null
                )
              ) : (
                <div className="">
                  <Link className="header_link" to={`/department/${1}`} key={1}>
                    WOMEN
                  </Link>
                  <Link className="header_link" to={`/department/${2}`} key={2}>
                    MEN
                  </Link>
                </div>
              )}
            </div>

            <div className="col-5">
              <form action="#">
                <input
                  className="header_input"
                  type="text"
                  placeholder="Искать по запросу"
                />
              </form>
            </div>

            <div className="header_icons-container">
              <Link to="/" className="header_link">
                <img src={Person} alt="logo" className="header_icons col-2" />
              </Link>
              <Link to="/" className="header_link">
                <img src={Heart} alt="logo" className="header_icons col-2" />
              </Link>
              <Link to="/basket" className="header_link">
                <img src={Cart} alt="logo" className="header_icons col-2" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
