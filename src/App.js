import "./App.css";
import React, { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [url, setUrl] = useState("");
  const onChange = (e) => {
    setUrl(e.target.value);
  };
  const printRef = React.useRef();
  console.log(url);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element,{useCORS: true, scale: 1});

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <div className="App">
      <h2>Subir archivo</h2>
      <label htmlFor="">imagen</label>
      <input type="text" onChange={(e) => onChange(e)} />
      <br />
      <div>
        <div
          ref={printRef}
          className="contenedor-imagen"
          style={{ backgroundImage: `url(${url})` }}
        />

        <h2 style={{ position: "absolute", right: 0 }}>hola</h2>
      </div>
      <button type="button" onClick={handleDownloadImage}>
        Download as Image
      </button>
    </div>
  );
}

export default App;
