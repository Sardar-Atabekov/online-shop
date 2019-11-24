import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const neobisLogo = "https://neobis.kg/static/media/Logo.4fff10de.svg";
class Navigation extends Component {
  render() {
    return (
      <nav className="navigationComponent">
        <Link to={"/admin"}>
          <img src={neobisLogo} className="neobis_logo" alt="neobisLogo" />
        </Link>
        <Link to={"/admin/traffic"} className="categories">
        Analytics
        </Link>
        <Link to={"/admin/sales"} className="categories">
        Online Store
    </Link>
        {/* <Link to={"/admin/kitchen"} className="categories">
          Kitchen
        </Link>
        <Link to={"/admin/bar"} className="categories">
          Bar
        </Link> */}
        <Link to={"/admin/transactions"} className="categories">
          История транзакции
        </Link>
        <Link to={"/admin/users"} className="categories">
          Пользователи
        </Link>
        <Link to={"/admin/departments"} className="categories">
          Департаменты
        </Link>
        <Link to={"/admin/category"} className="categories">
          Категории
        </Link>
        <Link to={"/admin/meals"} className="categories">
          Список товаров
        </Link>

        <Link to={"/admin/tables"} className="categories">
          Столы
        </Link>
        <Link to={"/admin/meals"} className="categories">
          Бронирования
        </Link>
      </nav>
    );
  }
}

export default Navigation;
