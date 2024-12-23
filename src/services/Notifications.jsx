import { toast } from "react-toastify";

export const successNotify = (heading, paragraph) => {
  return toast.success(
    <>
      <h1 className="text-xl text-success">{heading}</h1>
      <p>{paragraph}</p>
    </>,
    {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { color: "#000" },
    }
  );
};
export const errorNotify = (heading, paragraph) => {
  return toast.error(
    <>
      <h1 className="text-xl text-error">{heading}</h1>
      <p>{paragraph}</p>
    </>,
    {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { color: "#000" },
    }
  );
};
