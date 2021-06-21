import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";
import { saveProduct, listProducts,deleteProduct } from "../actions/ProductActions";

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector(state => state.productDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
  const dispatch = useDispatch();

    useEffect(() => {
      if (successSave) {
        setModalVisible(false);
      }
      dispatch(listProducts());
      return () => {
        //
      };
    }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
    const deleteHandler = (product) => {
      dispatch(deleteProduct(product._id));
    }
  return (
    <div className="products_crud">
      <div className="product_header">
        <h3>Products</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>

      {modalVisible && (
        <div className="form">
          <div className="createproduct_container">
            <form onSubmit={submitHandler}>
              <div>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </div>

              <input
                type="text"
                name="name"
                className="addproductfield"
                value={name}
                placeholder="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              ></input>

              <input
                type="text"
                name="price"
                className="addproductfield"
                value={price}
                placeholder="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              ></input>

              <input
                type="text"
                name="image"
                className="addproductfield"
                value={image}
                placeholder="Image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              ></input>

              <input
                type="text"
                name="brand"
                className="addproductfield"
                value={brand}
                placeholder="Brand"
                id="brand"
                onChange={(e) => setBrand(e.target.value)}
              ></input>

              <input
                type="text"
                name="countInStock"
                className="addproductfield"
                value={countInStock}
                placeholder="Stock"
                id="countInStock"
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>

              <input
                type="text"
                name="category"
                className="addproductfield"
                value={category}
                placeholder="Category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>

              <textarea
                name="description"
                value={description}
                placeholder="Description"
                className="textarea"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button type="submit" className="create_button">
                {id ? "Update" : "Create"}
              </button>

              <button
                type="button"
                onClick={() => setModalVisible(false)}
                className="back_button"
              >
                Back
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
              <button className="button" onClick={() => openModal(product)} >Edit</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)} >Delete</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
