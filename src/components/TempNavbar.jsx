// import React from "react";
// import StartButton from "./StartButton";
// import ImageSvg from "../img/svgs/image";

// const Navbar = () => {
//   const navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];
//   const navSolutions = [
//     { path: "#", list: "Image Classification" },
//     { path: "#", list: "Object Detection" },
//     { path: "#", list: "Structured Solutions" },
//   ];
//   return (
//     <>
//       <nav className="container mx-auto p-6">
//         <div className="flex items-center justify-between">
//           <div className="pt-2">
//             <img
//               className="-mt-5"
//               width={150}
//               height={150}
//               src={require("../img/aienusredlogo.png")}
//               alt="logo"
//             />
//           </div>
//           <div className="hidden space-x-6 md:flex">
//             {/* <div class="cursor-pointer group inline-block relative">
//               <a
//                 className={`font-semibold hover:text-darkPink duration-300`}
//                 href="#"
//               >
//                 Solution
//                 <ImageSvg fill="green" width="150" height="150" />
//               </a>
//               <ul class="absolute hidden pt-5 group-hover:block">
//                 {navSolutions.map((items, i) => (
//                   <li key={i} className="">
//                     <a
//                       className=" text-center rounded-t w-44 bg-gray-200 hover:bg-darkPink hover:text-white py-2 block"
//                       href="#"
//                     >
//                       {items.list}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div> */}

//             {navItems.map((items, i) => (
//               <a
//                 key={i}
//                 className={`font-semibold hover:text-darkPink duration-300`}
//                 href="#"
//               >
//                 {items}
//               </a>
//             ))}
//           </div>
//           <StartButton properties={"hidden md:block"} />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
