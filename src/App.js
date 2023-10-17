import { useEffect } from "react";
import "./App.css";

let tg = window.Telegram.WebApp;

useEffect(() => {
  tg.ready();
}, []);

const onClose = () => {
  tg.close();
};

function App() {
  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
