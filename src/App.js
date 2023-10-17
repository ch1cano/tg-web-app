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
      <h1>Telegram web app</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
