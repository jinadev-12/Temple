import React,{useState} from 'react'
import './index.css'





function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[100%] h-[100vh] relative overflow-hidden">
      <img
        src="/assets/img-bg.svg"
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 filter saturate-[1.3]"
      />

      <div
        /*- navbar*/ className="border-none w-[90%] m-auto  bg-transparent flex  justify-between items-center p-4  border-gray-300"
      >
        <div className="flex items-center gap-3">
          <i className="ri-ancient-gate-line text-3xl"></i>
          <h3 className="font-mont font-semibold text-black">Temple</h3>
        </div>
        <div
          /*links*/ className="hidden md:block text-gray-830 font-medium  md:items-center"
        >
          <ul className="flex font-mont gap-12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Location</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={`fixed top-0 left-0 h-[50%] w-full bg-white/10 backdrop-blur-sm  transform ${
            isOpen ? "translate-x-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="top-5 right-5 absolute self-end "
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-close-large-line"></i>
          </button>
          <div className="text-black font-medium p-6 flex flex-col justify-center items-center mt-10 gap-8">
            <a href="" className="">
              Home
            </a>
            <a href="">Location</a>
            <a href="">About</a>
            <a href="">Explore</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="md:hidden cursor-pointer">
          <i
            onClick={() => setIsOpen(true)}
            className="ri-apps-2-line text-3xl "
          ></i>
        </div>
        {/* Optional overlay */}{" "}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>

      <div /*HERO-SECTION*/ className="mt-40 ">
        <div className="font-mont  text-center -z-50 ">
          <h1 className="text-3xl font-bold px-16 my-6">Welcome To Temple</h1>
          <p className="px-5 font-medium">
            The temple is an attractive tourist place where you could vist and
            connect to the pure land of enviroment.you will experience peace and
            harmony
          </p>
          <img
            src="/assets/lantern-1.svg"
            alt=""
            className="absolute top-[255px] right-[78px]
           w-[50px] rotate-[15deg]"
          />
          <img
            src="/assets/lantern-2.svg"
            alt=""
            className="absolute w-[50px] left-3 rotate-[-15deg] "
          />
        </div>
        <div>
          <img src="/assets/img-1.svg" alt="" className="home-images" />
          <img src="/assets/img-2.svg" alt="" className="home-images" />
          <img src="/assets/img-3.svg" alt="" className="home-images" />
          <img src="/assets/img-4.svg" alt="" className="home-images" />
          <img src="/assets/img-5.svg" alt="" className="home-images" />
          <img src="/assets/img-6.svg" alt="" className="home-images" />
        </div>
        <div className="m-auto text-center ">
          <button className="font-mont font-semibold bg-gradient-to-r from-pink-400  to-pink-500 rounded-lg text-lg p-2 mt-3">
            Explore Place
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
