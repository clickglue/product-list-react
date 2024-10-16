import styles from "/src/App.module.css";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import data from "../data.json";

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.head1}>Desserts</h1>
      {data.map((item) => (
        <Item itemData={item}></Item>
      ))}
      <Cart></Cart>
    </main>
  );
}

export default App;
