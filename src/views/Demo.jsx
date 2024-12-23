// // import React, { useEffect, useState } from "react";
// // import Parse from "services/parseService";
// // const user = Parse.User.current();
// // const Demo = () => {
// //   const [obj, setObjs] = useState(null);
// //   const Image = Parse.Object.extend("image");
// //   const Text = Parse.Object.extend("image");
// //   let date = new Date();
// //   const demo = () => {
// //     const addproj = new Image();
// //     addproj.set("name", date);
// //     addproj.set("userId", user);
// //     addproj
// //       .save()
// //       .then((res) => console.log(res))
// //       .catch((err) => console.log(err));
// //   };
// //   useEffect(() => {
// //     const query = new Parse.Query(Image);
// //     query.equalTo("userId", user);
// //     query
// //       .find()
// //       .then((res) => setObjs(res))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const result = () => {
// //     return (
// //       obj &&
// //       obj.map((items) => {
// //         return (
// //           <>
// //             <p>{items.get("name").getTime()}</p>
// //           </>
// //         );
// //       })
// //     );
// //   };
// //   return (
// //     <div>
// //       <button onClick={demo} className="btn">
// //         createclass
// //       </button>
// //       {result()}
// //     </div>
// //   );
// // };

// // export default Demo;
// import React, { useEffect, useState } from "react";
// import Parse from "services/parseService";
// const user = Parse.User.current();
// const Demo = () => {
//   const [obj, setObjs] = useState(null);
//   const Image = Parse.Object.extend("image");
//   const Text = Parse.Object.extend("text");
//   let date = new Date();
//   const demo = () => {
//     const addproj = new Image();
//     addproj.set("name", date);
//     addproj.set("userId", user);
//     addproj
//       .save()
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };
//   const demo1 = () => {
//     const addproj = new Text();
//     addproj.set("name", date);
//     addproj.set("userId", user);
//     addproj
//       .save()
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     const textQuery = new Parse.Query(Text);
//     textQuery.equalTo("userId", user);

//     const imageQuery = new Parse.Query(Image);
//     imageQuery.equalTo("userId", user);

//     const queries = [textQuery, imageQuery];
//     Promise.all(queries.map((q) => q.find()))
//       .then((results) => {
//         const mergedResults = results.reduce(
//           (acc, curr) => acc.concat(curr),
//           []
//         );
//         console.log(mergedResults);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // const result = () => {
//   //   return (
//   //     obj &&
//   //     obj.map((items) => {
//   //       return (
//   //         <>
//   //           <p>{items.get("name").getTime()}</p>
//   //         </>
//   //       );
//   //     })
//   //   );
//   // };

//   return (
//     <div>
//       <button onClick={demo} className="btn">
//         Textclass
//       </button>
//       <br />
//       <br />

//       <button onClick={demo1} className="btn">
//         Imageclass
//       </button>
//       {/* {result()} */}
//     </div>
//   );
// };

// export default Demo;
