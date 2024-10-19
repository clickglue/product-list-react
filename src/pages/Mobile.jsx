import { useState, useEffect } from "react";
import styles from "/src/pages/Mobile.module.css";
import Item from "/src/components/Item/Item";
import Modal from "/src/components/Modal/Modal";
import Cart from "/src/components/Cart/Cart";
import data from "/data.json";

function Mobile() {

  const [cartData, setCartData] = useState(data);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=>{

  }),[];

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
      element.quantity=0
    });
    onDataChange(data)
    setCartData(data);
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
