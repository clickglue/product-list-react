import styles from "/src/App.module.css";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import data from "../data.json";

function App() {
  return (
    <main className={styles.app}>
      <Item itemData={data}></Item>
      <Cart></Cart>
    </main>
  );
}

export default App;
