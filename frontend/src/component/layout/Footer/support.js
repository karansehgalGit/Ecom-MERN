import React from "react";
import "./tos.css";
import { Button } from "@material-ui/core";

const support = () => {
  return (
    // <div className="support">
    //   <div className="support_body">
    //     <h1>We Are here to help you.</h1>
    //     <h3>We take customer satisfaction seriously and resolve queries in a timely and efficient manner +91 9999481211</h3>

    //   </div>

    //   {/* <div className="support_body">
    //     <p>We take customer satisfaction seriously and resolve queries in a timely and efficient manner +91 9999481211</p>
    //   </div> */}

    <div className="supportContainer">
      <h1>We Are here to help you.</h1>
      <h3>
        We take customer satisfaction seriously and resolve queries in a timely
        and efficient manner  +91 9999481211
      </h3> 

      {/* <a className="mailBtn" href="mailto:mymailforabhi@gmail.com"> */}
      <a className="mailBtn" href="mailto:sehgalk043@@gmail.com">
        {/* <Button>Contact: mymailforabhi@gmail.com</Button> */}
        <Button>Contact: sehgalk043@gmail.com</Button>
      </a>
    </div>
    // </div>
  );
};

export default support;

// const support = () => {
//   const couses = [
//     {
//       title: "Sales",
//       desc: " Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers",
//       phn: "+91 9213296224",
//     },
//     {
//       title: "Complaints",
//       desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
//       phn: "+91 9213296224",
//     }

//   ];
//   return (
//     <section>
//       <Herotext textt="Contact us" />
//       <div className="py-16 ">
//         <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
//           We're here to help you
//         </h2>
//         <div className="flex w-[85%] mx-auto gap-5  py-10 px-0">
//           {couses &&
//             couses.map((cause) => {
//               return (
//                 <div className="text-center bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5">
//                   <h3 className="text-gray-900 font-semibold text-2xl">
//                     {cause.title}
//                   </h3>
//                   <p className="text-lg text-gray-700">{cause.desc}</p>
//                   <a
//                     href={`tel:${cause.phn}`}
//                     className="text-sky-500 font-semibold text-xl"
//                   >
//                     {cause.phn}
//                   </a>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default support;
