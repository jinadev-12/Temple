import React, { useRef, useEffect } from "react";
import "./index.css";
import gsap from "gsap";

function App() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const lantern1Ref = useRef(null);
  const lantern2Ref = useRef(null);
  const homedataRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img1Ref.current,
        { opacity: 0, x: 400 },
        { opacity: 1, x: 0, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        img6Ref.current,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, delay: 0.1, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        img3Ref.current,
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, delay: 0.3, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        img5Ref.current,
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, delay: 0.5, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        img2Ref.current,
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, delay: 0.8, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        img4Ref.current,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, delay: 1.8, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        homedataRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, delay: 2.5, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        lantern1Ref.current,
        { opacity: 0, x: 70 },
        { opacity: 1, x: 0, delay: 3, duration: 1.5, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        lantern2Ref.current,
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, delay: 3, duration: 1.5, ease: "back.out(1.5)" }
      );
    });

    return () => ctx.revert(); // cleanup on unmount or hot reload
  }, []);

  return (
    // hero
    <div className="relative w-full h-[100vh] overflow-hidden text-[#490707]">
      {/* bg */}
      <img
        src="Public/assets/img-bg.svg"
        className="absolute top-0 right-0 w-full h-full object-cover object-center"
        alt="hello"
      />
      {/* home container */}
      <div className="pt-40 h-[100vh]">
        {/* data */}
        <div
          ref={homedataRef}
          className="relative md:text-left text-center z-10 max-w-[380px] md:max-w-[400px] md:ml-56 mx-auto"
        >
          <h1 className="text-5xl font-bold md:text-6xl font-mont">
            Welcome to Temple
          </h1>
          <p className="text-sm mb-8 mt-6 description font-mont font-medium mx-4 sm:mx-0 md:text-base">
            The temple is an attractive tourist place where you could vist and
            connect to the pure land of enviroment.you will experience peace and
            harmony
          </p>
          <button className=" font-mont py-2 px-6 bg-gradient-to-r from-[#fc6f76] to-[#ad1919] rounded-md font-semibold">
            Explore Place
          </button>
          {/* vilakku */}
          <img
            ref={lantern1Ref}
            className="absolute w-[50px] top-10 right-10 rotate-12 md:top-14 md:right-6"
            src="Public/assets/lantern-1.svg"
            alt="vilaku"
          />
          <img
            ref={lantern2Ref}
            className="absolute w-[50px] left-16 -rotate-12 md:bottom-[-18px] md:left-52 lg:"
            src="Public/assets/lantern-2.svg"
            alt="vilaku"
          />
        </div>
        {/* bg - overlays */}
        <div className="images">
          <img
            ref={img1Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-1.svg"
            alt="bg overlay"
          />
          <img
            ref={img2Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-2.svg"
            alt="bg overlay"
          />
          <img
            ref={img3Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-3.svg"
            alt="bg overlay"
          />
          <img
            ref={img4Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-4.svg"
            alt="bg overlay"
          />
          <img
            ref={img5Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-6.svg"
            alt="bg overlay"
          />
          <img
            ref={img6Ref}
            className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
            src="Public/assets/img-5.svg"
            alt="bg overlay"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useRef, useEffect } from "react";
// import "./index.css";
// import gsap from "gsap";

// function App() {
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const img3Ref = useRef(null);
//   const img4Ref = useRef(null);
//   const img5Ref = useRef(null);
//   const img6Ref = useRef(null);
//   const lantern1Ref = useRef(null);
//   const lantern2Ref = useRef(null);
//   const homedataRef = useRef(null);

//   useEffect(() => {
//     gsap.from(img1Ref.current, {
//       opacity: 0,
//       x: 400,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(img6Ref.current, {
//       opacity: 0,
//       y: 200,
//       delay: 0.1,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(img3Ref.current, {
//       opacity: 0,
//       y: 400,
//       delay: 0.3,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(img5Ref.current, {
//       opacity: 0,
//       y: 400,
//       delay: 0.5,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(img2Ref.current, {
//       opacity: 0,
//       y: 400,
//       delay: 0.8,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(img4Ref.current, {
//       opacity: 0,
//       y: 200,
//       delay: 1.8,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(homedataRef.current, {
//       opacity: 0,
//       y: -100,
//       delay: 2.5,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(lantern1Ref.current, {
//       opacity: 0,
//       x: 70,
//       delay: 3,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });

//     gsap.from(lantern2Ref.current, {
//       opacity: 0,
//       x: -70,
//       delay: 3,
//       duration: 1.5,
//       ease: "back.out(1.5)",
//     });
//   }, []);

//   return (
//     // hero
//     <div className="relative w-full h-[100vh] overflow-hidden text-[#490707]">
//       {/* bg */}
//       <img
//         src="Public/assets/img-bg.svg"
//         className="absolute top-0 right-0 w-full h-full object-cover object-center"
//         alt="hello"
//       />

//       {/* home container */}
//       <div className="pt-40 h-[100vh]">
//         {/* data */}
//         <div
//           ref={homedataRef}
//           className="relative md:text-left text-center z-10 max-w-[380px] md:max-w-[400px] md:ml-56 mx-auto"
//         >
//           <h1 className="text-5xl font-bold md:text-6xl font-mont">
//             Welcome to Temple
//           </h1>
//           <p className="text-sm mb-8 mt-6 description font-mont font-medium mx-4 sm:mx-0 md:text-base">
//             The temple is an attractive tourist place where you could vist and
//             connect to the pure land of enviroment.you will experience peace and
//             harmony
//           </p>
//           <button className="font-mont py-2 px-6 bg-gradient-to-r from-[#fc6f76] to-[#ad1919] rounded-md font-semibold">
//             Explore Place
//           </button>
//           {/* vilakku */}
//           <img
//             ref={lantern1Ref}
//             className="absolute w-[50px] top-10 right-10 rotate-12 md:top-14 md:right-6"
//             src="Public/assets/lantern-1.svg"
//             alt="vilaku"
//           />
//           <img
//             ref={lantern2Ref}
//             className="absolute w-[50px] left-16 -rotate-12 md:bottom-[-18px] md:left-52"
//             src="Public/assets/lantern-2.svg"
//             alt="vilaku"
//           />
//         </div>

//         {/* bg - overlays */}
//         <div className="images">
//           <img
//             ref={img1Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-1.svg"
//             alt="bg overlay"
//           />
//           <img
//             ref={img2Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-2.svg"
//             alt="bg overlay"
//           />
//           <img
//             ref={img3Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-3.svg"
//             alt="bg overlay"
//           />
//           <img
//             ref={img4Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-4.svg"
//             alt="bg overlay"
//           />
//           <img
//             ref={img5Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-6.svg"
//             alt="bg overlay"
//           />
//           <img
//             ref={img6Ref}
//             className="absolute bottom-0 max-w-none w-[800px] right-[-9rem] sm:right-0 md:w-[initial] lg:bottom-[-9rem]"
//             src="Public/assets/img-5.svg"
//             alt="bg overlay"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
