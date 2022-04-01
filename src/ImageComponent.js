/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

const ImageComponent = ({children}) => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "instagram-meme.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div ref={ref}>{children}</div>
      <button onClick={onButtonClick}>Descargar</button>
    </>
  );
};
export default ImageComponent;
