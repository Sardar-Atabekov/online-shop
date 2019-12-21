// import React, { useState } from "react";
// import Header from "../header/header";
// import API from "../../API";
// import Product from "./product";
// import { Link } from "react-router-dom";

// const Search = () => {
//   const [searchResults, setSearchResults] = useState({});

//   const searchItem = ernest => {
//     API.getSearch(ernest).then(res => {
//       const searchtData = res.data;
//       setSearchResults(searchtData);
//     });
//   };

//   return (
//     <div className="category">
//       <Header search={()=>a} />
//       {/* <div className="functions">
//           <div>
//             <label htmlFor="sortPrice">Сортировка: </label>
//             <select className="select" id="sortPrice">
//               <option value="1">По убыванию</option>
//               <option value="2">По возрастанию</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="department">Фильтрация: </label>
//           </div>
//         </div> */}
//       {this.state.isLoading ? (
//         <div>
//           <div className="categoryProducts">
//             {searchResults &&
//               searchResults.map(product => (
//                 // <Link
//                 //   key={product.id}
//                 //   to={`/product/${product.id}`}
//                 //   className="product"
//                 // >
//                 //   {console.log(product)}
//                 //   {product.productInfos[0] &&
//                 //   product.productInfos[0].images[0] &&
//                 //   product.productInfos[0].images[0].url ? (
//                 //     <img
//                 //       src={product.productInfos[0].images[0].url}
//                 //       alt={product.name}
//                 //     />
//                 //   ) : (
//                 //     "false"
//                 //   )}
//                 //   <div className="product_text">{product.name}</div>
//                 //   <div className="product_price">
//                 //     {product.productInfos[0] &&
//                 //       product.productInfos[0].unitPrice &&
//                 //       product.productInfos[0].unitPrice} сом
//                 //   </div>
//                 // </Link>
//                 <Product product={product} key={product.id} />
//               ))}
//           </div>
//         </div>
//       ) : (
//         <Loading />
//       )}
//     </div>
//   );
// };
// export default Search;

import React, { useState, useEffect } from "react";
import { getData } from "../../requests.js";
import Header from "./../header/header";
import Product from "./product";
// import Footer from "./../../footer/footer";
const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    searchItem();
  }, [name]);
  const searchItem = () => {
    getData(`/product/search/${name}`).then(res => {
      const searchtData = res;
      setSearchResults(searchtData);
    });
  };
  console.log(name);
  return (
    <div className="category">
      <Header
        search={name => {
          setName(name);
        }}
      />
      {/* <div className="functions">
          <div>
            <label htmlFor="sortPrice">Сортировка: </label>
            <select className="select" id="sortPrice">
              <option value="1">По убыванию</option>
              <option value="2">По возрастанию</option>
            </select>
          </div>
          <div>
            <label htmlFor="department">Фильтрация: </label>
          </div>
        </div> */}

      <div>
        <div className="categoryProducts">
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map(product => (
              // <Link
              //   key={product.id}
              //   to={`/product/${product.id}`}
              //   className="product"
              // >
              //   {console.log(product)}
              //   {product.productInfos[0] &&
              //   product.productInfos[0].images[0] &&
              //   product.productInfos[0].images[0].url ? (
              //     <img
              //       src={product.productInfos[0].images[0].url}
              //       alt={product.name}
              //     />
              //   ) : (
              //     "false"
              //   )}
              //   <div className="product_text">{product.name}</div>
              //   <div className="product_price">
              //     {product.productInfos[0] &&
              //       product.productInfos[0].unitPrice &&
              //       product.productInfos[0].unitPrice} сом
              //   </div>
              // </Link>
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
