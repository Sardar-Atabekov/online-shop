import React, { useState, useEffect } from "react";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import axios from "axios";
import { postData, API } from "../../requests";
import "./addProduct.css";

const AddProduct = () => {
  const [subCategory, setCategory] = useState(1);
  let [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  let [category, getCategory] = useState({});
  let [size, setSize] = useState("");
  const [inStock, setInStock] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImages] = useState(0);
  const [image1, setImages1] = useState(0);
  const [image2, setImages2] = useState(0);
  const [image3, setImages3] = useState(0);
  const [dp, getDp] = useState({});
  let [selectDp, setSelectDp] = useState([]);

  useEffect(() => {
    axios.get(`${API}/subCategory/all`).then(res => {
      const data = res.data;
      getCategory(data);
    });
    axios.get(`${API}/category/all`).then(res => {
      const data = res.data;
      getDp(data);
      setSelectDp(data[0].id);
    });
  }, []);

  const product = {
    description: description,
    inStock: inStock,
    name: name,
    productInfos: [
      {
        color: color.toUpperCase(),
        images: [
          {
            url: image
          },
          {
            url: image1
          },
          {
            url: image2
          },
          {
            url: image3
          }
        ],

        inStock: inStock,
        quantity: quantity,
        size: size.toUpperCase(),
        unitPrice: price
      }
    ],
    subCategory: subCategory
  };
  console.log(product.images);
  function add() {
    postData("/product/", product).then(res => {
      console.log(res);
      if (res.status !== "error" && res.status !== 400 && res.status !== 500) {
        alert("Данные успешно добавлены!");
      } else {
        alert("Ошибка. Проверьте введенные данные");
      }
    });
  }
  console.log(JSON.stringify(product));

  let categorySelect = category;
  console.log(categorySelect);
  console.log(selectDp);
  categorySelect =
    categorySelect.length > 0 &&
    categorySelect.filter(item => item.category_id === +selectDp);
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
                  <label htmlFor="inCategory">Категория</label>
                  <select
                    id="inCategory"
                    name="inCategory"
                    className="select"
                    required
                    onChange={e => setSelectDp(e.target.value)}
                  >
                    {dp.length > 0
                      ? dp.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))
                      : ""}
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
                  <label htmlFor="inCategory">Субкатегория</label>
                  <select
                    id="inCategory"
                    name="inCategory"
                    className="select"
                    required
                    onChange={e => setCategory(e.target.value)}
                  >
                    {categorySelect.length > 0
                      ? categorySelect.map(item => (
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
                <div className="form-group addImage">
                  <label htmlFor="image">Изображение</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="image"
                    onChange={e => setImages(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="image"
                    onChange={e => setImages1(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="image"
                    onChange={e => setImages2(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="image"
                    onChange={e => setImages3(e.target.value)}
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

              <input type="button" value="Добавить" onClick={add} />
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
