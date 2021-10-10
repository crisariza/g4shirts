import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
import styles from "./ProductCard.module.css";
import { addProductToCart, getOrdersUser } from "../../../../redux/actions";
import Reviews from "../ProductReviews/ProductReviews";

import Modal from "react-modal";
import ProductReviews from "../ProductReviews/ProductReviews";
import ProductViewReviews from "../ProductViewReviews/ProductViewReviews";
import swal from "sweetalert";
import jwt from "jsonwebtoken"; // Incluido por León

Modal.setAppElement("#root");

export default function ProductCard({
  id,
  name,
  url,
  description,
  price,
  productSizes,
  categories,
  reviews,
}) {
  const state = useSelector((state) => state);
  const [input, setInput] = useState({
    name: "",
    price: 0,
    amount: 0,
    size: "",
    url: "",
    id: -1,
  });

  productSizes = productSizes.sort((a, b) =>
    a.id > b.id ? 1 : a.id < b.id ? -1 : 0
  );

  let stockCero =
    productSizes[0].stock === 0 &&
    productSizes[1].stock === 0 &&
    productSizes[2].stock === 0 &&
    productSizes[3].stock === 0 &&
    productSizes[4].stock === 0 &&
    productSizes[5].stock === 0;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  let [contador, setContador] = useState(0);

  const dispatch = useDispatch();

  const mostrarAlerta = (input) => {
    if (
      productSizes &&
      productSizes[input.id] &&
      productSizes[input.id].stock > 0
    ) {
      swal({
        text: "You added the size " + input.size + " to the cart.",
        timer: "1250",
        icon: "success",
      }).then((respuesta) => {});
    } else if (
      productSizes &&
      productSizes[input.id] &&
      productSizes[input.id].stock <= 0 &&
      input.name.length > 0
    ) {
      swal({
        text:
          "There's no stock of the size " +
          input.size +
          ", it wans't added to the cart.",
        timer: "1250",
        icon: "error",
      }).then((respuesta) => {});
    } else {
      swal({
        text: "Nothing was added to the cart. You must select a size.",
        timer: "1500",
        icon: "error",
      }).then((respuesta) => {});
    }
  };
  const mostrarAlertaModal = (input) => {
    swal({
      text: "You added the size " + input.size + " to the cart.",
      timer: "1100",
      icon: "success",
    }).then((respuesta) => {});
  };
  const handleAddProduct = () => {
    setContador(contador++);
    dispatch(addProductToCart(input, id));
    setContador(contador++);
    mostrarAlerta(input);
    setInput({
      name: "",
      price: 0,
      amount: 0,
      size: "",
      url: "",
      id: -1,
    });
  };
  const handleAddProduct2 = () => {
    setContador(contador++);
    dispatch(addProductToCart(input, id));
    setContador(contador++);
    mostrarAlertaModal(input);
    setInput({
      name: "",
      price: 0,
      amount: 0,
      size: "",
      url: "",
      id: -1,
    });
  };

  const handleSize = (e) => {
    if (
      productSizes &&
      productSizes[e.target.id] &&
      productSizes[e.target.id].stock > 0
    ) {
      setInput({
        ...input,
        name: name,
        price: price,
        amount: 1,
        size: e.target.value,
        url: url[0].url,
        id: e.target.id,
      });
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(getOrdersUser(User.id));
    }
  }, [contador, dispatch]);

  //-------------------------------------------------
  // Incluido por León
  //-------------------------------------------------
  let token = window.localStorage.getItem("token");
  if (token) {
    var User = jwt.decode(token);
  }
  //-------------------------------------------------
  return (
    <div
      className={styles.productCardContainer}
      style={{ justifyContent: "space-around" }}
    >
      <div className={styles.backCard}>
        {/*<Link to={`/products/${id}`}>*/}
        <button
          onClick={() => setModalIsOpen(true)}
          className={styles.buttonImg}
        >
          <picture>
            <source type="image/webp" srcSet={`${url[0].url}.webp`} />
            <source type="image/png" srcSet={`${url[0].url}.png`} />
            <img
              className={styles.imgSize}
              src={`${url[0].url}.png`}
              alt={name}
            />
          </picture>
        </button>
        {/*</Link>*/}

        <div className={`${styles.priceUbi}`}>
          <div className={`${styles.textCard}`}>
            {/*<Link className={`${styles.nameLink}`} to={`/products/${id}`}>*/}

            <button
              onClick={() => setModalIsOpen(true)}
              className={styles.name}
            >
              {name}
            </button>

            {/*</Link>*/}

            <p className={styles.type}>T-shirt</p>
            <p>Size</p>
            <ul className={styles.sizeList}>
              <button
                value="XS"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[0].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[0].stock > 0 ? "" : "Stockless"}
                id={0}
              >
                XS
              </button>

              <button
                value="S"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[1].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[1].stock > 0 ? "" : "Stockless"}
                id={1}
              >
                S
              </button>
              <button
                value="M"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[2].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[2].stock > 0 ? "" : "Stockless"}
                id={2}
              >
                M
              </button>
              <button
                value="L"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[3].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[3].stock > 0 ? "" : "Stockless"}
                id={3}
              >
                L
              </button>
              <button
                value="XL"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[4].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[4].stock > 0 ? "" : "Stockless"}
                id={4}
              >
                XL
              </button>
              <button
                value="XXL"
                onClick={handleSize}
                className={`${
                  styles.itemList +
                  " " +
                  (productSizes[5].stock > 0 ? "" : styles.noStockCard)
                }`}
                title={productSizes[5].stock > 0 ? "" : "Stockless"}
                id={5}
              >
                XXL
              </button>

              {stockCero ? <span>Empty</span> : null}
            </ul>
          </div>
          <div className={`${styles.priceContainer}`}>
            <h2 className={`${styles.price}`}>{price} USD</h2>
          </div>

          {/* Incluiod por León */}
          {/* Restricción para que el admin no cree carrito de compra */}
          {token && User && User.role === "admin" ? (
            <></>
          ) : (
            <button
              disabled={stockCero ? true : false}
              onClick={handleAddProduct}
              className={`${styles.cartButton}`}
            >
              {stockCero ? "STOCKLESS" : "ADD TO THE CART"}
              <i className="fas fa-shopping-cart"></i>
            </button>
          )}
        </div>
      </div>

      <Modal
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={`${styles.modal}`}
      >
        <button
          className={`${styles.modalButtonClose}`}
          onClick={() => setModalIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <p className={`${styles.priceModal}`}>{price} USD</p>
        <h2 className={`${styles.titleModal}`}>{name}</h2>
        <p className={`${styles.descriptionModal}`}>{description}</p>

        <picture>
          <source type="image/webp" srcSet={`${url[0].url}.webp`} />
          <source type="image/png" srcSet={`${url[0].url}.png`} />
          <img
            className={`${styles.imgModal}`}
            src={
              `${url[1].url}.png` ? `${url[1].url}.png` : `${url[0].url}.png`
            }
            alt={name}
          ></img>
        </picture>

        <p style={{ fontWeight: "lighter", fontSize: "18px" }}>Size:</p>
        <ul className={`${styles.sizeList}`}>
          <button
            value="XS"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[0].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[0].stock > 0 ? "" : "Stockless"}
            id={0}
          >
            XS
          </button>

          <button
            value="S"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[1].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[1].stock > 0 ? "" : "Stockless"}
            id={1}
          >
            S
          </button>
          <button
            value="M"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[2].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[2].stock > 0 ? "" : "Stockless"}
            id={2}
          >
            M
          </button>
          <button
            value="L"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[3].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[3].stock > 0 ? "" : "Stockless"}
            id={3}
          >
            L
          </button>
          <button
            value="XL"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[4].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[4].stock > 0 ? "" : "Stockless"}
            id={4}
          >
            XL
          </button>
          <button
            value="XXL"
            onClick={handleSize}
            className={`${
              styles.itemList +
              " " +
              (productSizes[5].stock > 0 ? "" : styles.noStockCard)
            }`}
            title={productSizes[5].stock > 0 ? "" : "Stockless"}
            id={5}
          >
            XXL
          </button>

          {stockCero ? <span>Empty</span> : null}
        </ul>
        <ProductReviews reviews={reviews} productID={id}></ProductReviews>
        <ProductViewReviews
          reviews={reviews}
          productID={id}
        ></ProductViewReviews>
        <div className={`${styles.modalButtonContainer}`}>
          {/* Incluiod por León */}
          {/* Restricción para que el admin no cree carrito de compra */}
          {token && User && User.role === "admin" ? (
            <></>
          ) : (
            <button
              disabled={stockCero ? true : false}
              onClick={handleAddProduct}
              className={`${styles.cartButton}`}
            >
              {stockCero ? "STOCKLESS" : "ADD TO THE CART"}
              <i className="fas fa-shopping-cart"></i>
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}
