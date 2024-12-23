import { Tab } from "@headlessui/react";
import React from "react";
import useImageLightBox from "hooks/lightbox/useImageLightBox";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ModelExplainblity = (props) => {
  // const { Imagebox, setData } = useImageLightBox();
  const { data, path } = props;
  const keys = Object.keys(data);
  const images = data[keys[0]].img_path;
  const imageKeys = images.map((values) => Object.keys(values));

  return (
    <div className="max-w-7xl px-5 mx-auto mt-32 text-center">
      <h1 className="text-3xl font-semibold mb-3">{keys[0]}</h1>
      <p className="opacity-50 mb-5">{data[keys[0]].one_liner}</p>
      <Tab.Group>
        <Tab.List className="flex flex-col space-x-1 rounded-xl bg-primary p-1 sm:flex-row">
          {imageKeys.map((items, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-md leading-5 text-darkring-offset-primary uppercase",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                  selected
                    ? "bg-base-100 shadow font-semibold"
                    : "text-base-100 hover:bg-white/[0.12] hover:text-white "
                )
              }
            >
              {items}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {images.map((items, i) => (
            <Tab.Panel key={i} className={"rounded-xl   shadow-2xl"}>
              <img
                className="rounded-xl"
                src={path + items[imageKeys[i]]}
                alt=""
                // onClick={() => {
                //   setData(path + items[imageKeys[i]]);
                // }}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      {/* <Imagebox /> */}
    </div>
  );
};

export default ModelExplainblity;

// import { Tab } from "@headlessui/react";
// import React from "react";
// // import useImageLightBox from "hooks/Lightbox/useImageLightBox";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const ModelExplainblity = (props) => {
//   const { data, path } = props;
//   const keys = Object.keys(data);
//   const images = data[keys[0]].img_path;
//   const imageKeys = images.map((values) => Object.keys(values));

//   return (
//     <div className="max-w-7xl px-5 mx-auto mt-32 text-center">
//       <h1 className="text-3xl font-semibold mb-3">{keys[0]}</h1>
//       <p className="opacity-50 mb-5">{data[keys[0]].one_liner}</p>
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl bg-primary p-1">
//           {imageKeys.map((items, i) => (
//             <Tab
//               key={i}
//               className={({ selected }) =>
//                 classNames(
//                   "w-full rounded-lg py-2.5 text-md leading-5 text-darkring-offset-primary uppercase",
//                   "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
//                   selected
//                     ? "bg-base-100 shadow font-semibold"
//                     : "text-base-100 hover:bg-white/[0.12] hover:text-white "
//                 )
//               }
//             >
//               {items}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {images.map((items, i) => (
//             <Tab.Panel key={i} className={"rounded-xl   shadow-2xl"}>
//               <img
//                 className="rounded-xl"
//                 src={path + items[imageKeys[i]]}
//                 alt=""
//               />
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// };

// export default ModelExplainblity;
