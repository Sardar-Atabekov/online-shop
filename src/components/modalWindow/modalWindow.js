import React from "react";
import "./modalWindow.css";

export default class ModalWindow extends React.Component {
  render() {
    setTimeout(() => this.props.statusModal(false), 1500);
    return (
      <div className="modalWrapper">
        <div className="modalWindow">
          <h2>Ваш заказ принять!</h2>
        </div>
      </div>
    );
  }
}
