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
          Аналитика
        </Link>
        <Link to={"/admin/sales"} className="categories">
          Продажи
        </Link>

        <Link to={"/admin/transactions"} className="categories">
          История транзакции
        </Link>
        {/* <Link to={"/admin/users"} className="categories">
          Пользователи
        </Link> */}
        <Link to={"/admin/departments"} className="categories">
          Департаменты
        </Link>
        <Link to={"/admin/category"} className="categories">
          Категории
        </Link>
        <Link to={"/admin/products"} className="categories">
          Список товаров
        </Link>

        <Link to={"/admin/Collection"} className="categories">
          Коллекция
        </Link>
      </nav>
    );
  }
}

export default Navigation;
