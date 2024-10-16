import "./App.css";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import data from "../data.json"

function App() {
  return (
    <>
    {/*<Item itemData={data}></Item>*/}
    <Cart></Cart>
    </>
  );
}

export default App;
