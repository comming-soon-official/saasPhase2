import * as React from "react";

const ImageSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M19 14a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 22H6v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5Zm0-4.83-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20Z" />
  </svg>
);

export default ImageSvg;
