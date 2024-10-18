import styles from "/src/pages/Mobile.module.css";
import Item from "/src/components/Item/Item";
import Cart from "/src/components/Cart/Cart";
import data from "/data.json";

function Mobile() {
  return (
    <main className={styles.app}>
      <h1 className={styles.head1}>Desserts</h1>
      <div className={styles.itemContainer}>
      {data.map((item) => (
        <Item itemData={item}></Item>
      ))}
      </div>
      <Cart></Cart>
    </main>
  );
}

export default Mobile;
