import React from "react";

const Vision = () => {
  return (
    <div className="md:flex md:gap-3 p-5">
      <div className="border border-gray-100 py-16 rounded mb-3">
        <div className="flex gap-2 items-center justify-center pb-3">
          <ion-icon
            name="eye-outline"
            className="cursor-pointer"
            size="small md:large"
          ></ion-icon>
          <h1 className="font-semibold text-3xl">Our Vision</h1>
        </div>
        <div className="px-5">
          <p className="text-2xl ml-4 text-center">
            To be ever dependable through the creation of seamless connections
            and network options for our domestic, regional and international
            markets.
          </p>
        </div>
      </div>

      <div className="border border-gray-100 py-16 bg-gray-300 rounded mb-3">
        <div className="flex gap-2 items-center justify-center pb-3">
          <ion-icon
            name="eye-outline"
            className="cursor-pointer"
            size="small md:large"
          ></ion-icon>
          <h1 className="font-semibold text-3xl">Our Mision</h1>
        </div>
        <div className="px-5">
          <p className="text-2xl ml-4 text-center">
            To make booking and reservations of flights as fast as possible, bringing responsive web app to the users which is fit to all screen sizes.
          </p>
        </div>
      </div>

      <div className="border border-gray-100 py-16 mb-3">
        <div className="flex gap-2 items-center justify-center pb-3">
          <ion-icon
            name="eye-outline"
            className="cursor-pointer"
            size="small md:large"
          ></ion-icon>
          <h1 className="font-semibold text-3xl">Local Content</h1>
        </div>
        <div className="px-5">
          <p className="text-2xl ml-4 text-center">
            One of the major ideas behind setting up FLY ASAP is to reduce the number of human labour hereby making the automated system.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Vision;

// const Vision = () => {
//   return (
//     <div className="bg-gray-50">
//       <div className="md:grid md:grid-cols-2 py-5 px-24 justify-between">
//         {/* vision grid*/}
//         <div className="items-center">
//           <div className="flex px-6 py-3 items-center justify-start">
//             <div>
//               <ion-icon name="eye-outline"
//               className="cursor-pointer"
//               size="small md:large"></ion-icon>
//             </div>
//             <div className="ml-3">
//               <h1 className="font-semibold text-3xl">Our Vision</h1>
//             </div>
//           </div>
//           <div className="px-5">
//             <p className="text-2xl ml-4 text-center">
//               To be ever dependable through the creation of seamless connections
//               and network options for our domestic, regional and international
//               markets.
//             </p>
//           </div>
//         </div>
//         <hr className="md:hidden my-16"/>
//         {/* why choose us */}
//         <div className="items-center">
//           <div className="flex px-6 py-3 items-center md:ml-9">
//             <div>
//               <ion-icon name="alert-circle-outline"
//               className="cursor-pointer"
//               size="small"></ion-icon>
//             </div>
//             <div className="ml-3">
//               <h1 className="font-semibold text-3xl">Why Choose Us?</h1>
//             </div>
//           </div>
//           <div className="px-5">
//             <p className="text-2xl ml-4 text-center">
//               We are committed to the concept of Total Quality Management in
//               which every function in our airline as well as support
//               organisation is performed and audited to ensure stringent
//               compliance with the requirements of the Nigeria Civil Aviation
//               Regulations (Nig. CARs).
//             </p>
//           </div>
//         </div>
//         <hr className="md:hidden my-16"/>

//         {/* contact grid */}
//         <div className="items-center">
//           <div className="flex px-6 py-3 items-center">
//             <div>
//             <ion-icon name="call-outline"  className="cursor-pointer"
//               size="small md:large"></ion-icon>
//             </div>
//             <div className="ml-3">
//               <h1 className="font-semibold text-3xl">Contact Us</h1>
//             </div>
//           </div>
//           <div className="px-5">
//             <h1 className="text-2xl ml-4">Head Ofice:</h1>
//             <div className="flex text-2xl ml-4 items-center">
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p>Clef Avenu, Bishops Court, Imo State.</p>
//               </div>
//             </div>

//             <div className="flex text-2xl ml-4 items-center">
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p>+23490 6364 6331</p>
//               </div>
//             </div>

//             <div className="flex text-2xl ml-4 items-center">
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p>paparazzip8@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex text-xl ml-4 items-center">
//               <h1>
//                 Hours:
//                 <span>
//                   Monday to Friday: 8am - 5pm. (excluding public holidays)
//                 </span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision;
