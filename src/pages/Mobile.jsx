import { useState } from "react";
import styles from "/src/pages/Mobile.module.css";
import Item from "/src/components/Item/Item";
import Modal from "/src/components/Modal/Modal";
import Cart from "/src/components/Cart/Cart";
import data from "/data.json";

function Mobile() {
  const [cartData, setCartData] = useState(data);
  const [showModal, setShowModal]=useState(false)

  function onDataChange(updatedCartData) {
    const updatedItems = cartData.map((item) =>
      item.name === updatedCartData.name
        ? {
            ...item,
            quantity: updatedCartData.quantity,
          }
        : item
    );
    if (updatedItems !== cartData) {
      setCartData(updatedItems);
    }
  }
  function onConfirm(){
    setShowModal(true)
    //show modal
  }
  function onCloseModal(){
    setCartData(data)
    setShowModal(false)
    //close modal
  }

  return (
    <main className={styles.app}>
      {showModal&&
      <Modal cartData={cartData} onCloseModal={onCloseModal}></Modal>}
      <div className={styles.itemContainer}>
        <h1 className={styles.head1}>Desserts</h1>
        {cartData.map((item) => (
          <Item itemData={item} onDataChange={onDataChange}></Item>
        ))}
      </div>
      <Cart cartData={cartData} onDataChange={onDataChange} onConfirm={onConfirm}></Cart>
    </main>
  );
}

export default Mobile;
