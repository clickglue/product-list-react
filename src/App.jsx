import styles from "/src/App.module.css";
import Mobile from "./pages/mobile";
import Modal from "./pages/Modal";

function App() {
  return (
    <main className={styles.app}>
      <Modal></Modal>
      <Mobile></Mobile>
    </main>
  );
}

export default App;
