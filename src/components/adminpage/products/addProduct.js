import React, { useState, useEffect } from "react";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import axios from "axios";
import { postData, API } from "../../requests";
import "./addProduct.css";

const AddProduct = () => {
  const [subCategory, setCategory] = useState(1);
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [category, getCategory] = useState({});
  const [size, setSize] = useState({});
  const [inStock, setInStock] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState(0);

  useEffect(() => {
    axios.get(`${API}/subCategory/all`).then(res => {
      const data = res.data;
      getCategory(data);
    });
    // getData("/subCategory/all").then(data => {
    //   setCategory(data);
    // });
  }, []);
  const product = {
    description: description,
    inStock: inStock,
    name: name,
    productInfos: [
      {
        color: color,
        images: [
          {
            url: images
          }
        ],

        inStock: inStock,
        quantity: quantity,
        size: size,
        unitPrice: price
      }
    ],
    subCategory: subCategory
  };
  console.log(product);
  function add() {
    postData("/product/", product);
  }

  return (
    <div className="wrapper">
      <aside className="navBlock">
        <Navigation />
      </aside>
      <div className="containerAdmin">
        <header className="main-search">
          <Search />
        </header>
        <main className="addProductContent">
          <div className="card-header p-0">
            <div className="edit-user-details__bg">
              <img
                src="https://www.texasheart.org/wp-content/uploads/2018/08/thi-christmas-lights-defocused-background-Bokeh-Gold-Blue.jpg"
                alt="BackgroundImage"
              />
            </div>
          </div>
          <div className="formBlock">
            <div className="title-block">
              <div className="form-title">
                <h6 className="form-text">Product info</h6>
                <p className="form-text">
                  Configure general product info information
                </p>
              </div>
            </div>
            <form className="form" onSubmit={add}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Названия</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inCategory">Категории</label>
                  <select
                    id="inCategory"
                    name="inCategory"
                    className="select"
                    required
                    onChange={e => setCategory(e.target.value)}
                  >
                    {category.length > 0
                      ? category.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
                <div className="commentBlock">
                  <label htmlFor="comment">Описания</label>
                  <br />
                  <textarea
                    id="comment"
                    name="comment"
                    required
                    onChange={e => setDescription(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group smallGroup">
                  <label htmlFor="inStock">В наличии</label>
                  <select
                    id="inStock"
                    required
                    className="select"
                    onChange={e => setInStock(e.target.value)}
                  >
                    <option value="true">Есть</option>
                    <option value="false">Скрыта</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="unitPrice">Цена</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="unitPrice"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Цвет</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="color"
                    onChange={e => setColor(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Изображение</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="image"
                    onChange={e => setImages(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Количество</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="quantity"
                    onChange={e => setQuantity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="size">Размер</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="size"
                    onChange={e => setSize(e.target.value)}
                  />
                </div>
              </div>

              <input type="button" value="Добавить" onClick={add}/>
            </form>
          </div>
        </main>
        <footer className="main-footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
export default AddProduct;
