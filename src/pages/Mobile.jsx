import { useState, useEffect } from "react";
import styles from "./Mobile.module.css";
import Item from "../components/Item/Item";
import Modal from "../components/Modal/Modal";
import Cart from "../components/Cart/Cart";
import data from "/data.json";

function Mobile() {
  const [cartData, setCartData] = useState(data);
  const [showModal, setShowModal] = useState(false);

  function translate() {
    // Determine if the app is running in production or development
    const basePath =
      process.env.NODE_ENV === "production" ? "/product-list-react" : "";

    // Adjust the image paths dynamically based on the environment
    const updatedProducts = data.map((product) => ({
      ...product,
      image: {
        thumbnail: `${basePath}${product.image.thumbnail}`,
        mobile: `${basePath}${product.image.mobile}`,
        tablet: `${basePath}${product.image.tablet}`,
        desktop: `${basePath}${product.image.desktop}`,
      },
    }));
    setCartData(updatedProducts);
  }

  useEffect(() => {
    translate();
  }, []);

  function onDataChange(updatedCartData) {
    const updatedItems = cartData.map((item) =>
      item.name === updatedCartData.name
        ? {
            ...item,
            quantity: updatedCartData.quantity,
          }
        : item
    );
    setCartData(updatedItems);
  }

  function onConfirm() {
    setShowModal(true);
    //show modal
  }
  function onCloseModal() {
    setShowModal(false);
    data.forEach((element) => {
      element.quantity = 0;
    });
    onDataChange(data);

    setCartData(data);
    translate();
  }

  return (
    <main className={styles.app}>
      {showModal && (
        <Modal cartData={cartData} onCloseModal={onCloseModal}></Modal>
      )}
      <div className={styles.itemContainer}>
        <h1 className={styles.head1}>Desserts</h1>
        {cartData.map((item) => (
          <Item
            key={item.name}
            itemData={item}
            onDataChange={onDataChange}
          ></Item>
        ))}
      </div>
      <Cart
        cartData={cartData}
        onDataChange={onDataChange}
        onConfirm={onConfirm}
      ></Cart>
    </main>
  );
}

export default Mobile;
