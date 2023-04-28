import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = useState("ligth");

  const handleClickAdd = () => {
    document.documentElement.classList.add("dark");
    setDarkMode("dark")
  };

  const handleClickRemove = () => {
    document.documentElement.classList.remove("dark");
    setDarkMode("ligth")
  };

  return (
    <header className="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="content pt-1.5 px-8">
        <nav className="flex items-center justify-between">
          <h2 className="text-white font-bold text-2xl ml-12">Jean Lárez</h2>
          <div className="auth flex items-center mr-12 relative">
            <button className=" text-2xl bg-sky-600 w-14 mr-4 px-4 py-2 font-bold text-gray-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200">
              {darkMode === "dark" ?<MdOutlineDarkMode /> : <MdOutlineLightMode /> }
            </button>
            <div
              className='w-32 absolute top-12 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
		after:w-full after:h-full after:-z-20 after:rounded-lg peer-focus:opacity-100 peer-focus:visible transition-all duration-300 invisible opacity-0 
    '
            >
              <ul className="py-4 px-3 flex flex-col gap-3">
                <li
                  className="flex justify-around items-center cursor-pointer bg-sky-300 p-1 rounded-md hover:opacity-90 text-white text-xl"
                  onClick={handleClickRemove}
                >
                  <MdOutlineLightMode /> Light
                </li>
                <li
                  className="flex justify-around items-center  cursor-pointer bg-blue-300 p-1 rounded-md hover:opacity-90 text-white text-xl"
                  onClick={handleClickAdd}
                >
                  <MdOutlineDarkMode /> Dark
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-md bg-sky-600 w-14 px-3 py-2 font-bold text-gray-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200  ">
                ENG
              </button>
              <div
                className='w-32 absolute top-12 z-10
                after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
                after:w-full after:h-full after:-z-20 after:rounded-lg peer-focus:opacity-100 peer-focus:visible transition-all duration-300 invisible opacity-0
    '
              >
                <ul className="py-4 px-3 flex flex-col gap-3">
                  <li className="flex justify-around items-center cursor-pointer bg-sky-300 p-1 rounded-md hover:opacity-90 text-white text-xl">
                    ENG
                  </li>
                  <li className="flex justify-around items-center  cursor-pointer bg-blue-300 p-1 rounded-md hover:opacity-90 text-white text-xl">
                    ESP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="body mx-8">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-1/2 pt-6">
              <h1 className="text-4xl mb-8 ml-4 font-bold text-white tracking-wide">
                Full Stack Developer
              </h1>
              <p className="text-gray-900 text-lg mr-16 mb-8 ml-4">
                I am passionate about developing websites, applications and
                programs by giving them structure, appearance and interactive
                behaviors by applying industry-standard technologies.
              </p>

              <p className="text-gray-900 text-lg mr-16 mb-8 ml-4">
                I also have experience in training and mentoring people and
                coordinating work teams, allowing me to communicate effectively
                with team members, clients and stakeholders.
              </p>

              <button className="bg-gray-900 text-gray-200 ml-3 py-2 px-5 rounded  hover:bg-gray-800 hover:text-gray-100">
                Resume
              </button>
            </div>
            <div className="w-96 md:max-w-md">
              <img
                className="h-max"
                src="src/assets/jean_perfil_izquierdo.png"
                alt="Foto de Jean Larez perfil zquierdo"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
