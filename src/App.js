import "./App.css";
import { useState } from "react";
import ImageComponent from "./ImageComponent";

function App() {
  const [url, setUrl] = useState("");
  const onChange = (e) => {
    setUrl(e.target.value);
  };
  console.log(url);
  return (
    <div className="App">
      <h2>Subir archivo</h2>
      <label htmlFor="">imagen</label>
      <input type="text" onChange={(e) => onChange(e)} />
      <br />
      <ImageComponent>
        <div
          className="contenedor-imagen"
          style={{ backgroundImage: `url(${url})` }}
        />
      </ImageComponent>
    </div>
  );
}

export default App;
