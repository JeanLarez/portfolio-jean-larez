import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useStore } from "../store/lang";

const Header = () => {
  const [darkMode, setDarkMode] = useState("ligth");
  const lang = useStore((state) => state.lang);
  const changeLangEng = useStore((state) => state.changeLangEng);
  const changeLangEsp = useStore((state) => state.changeLangEsp);

  const handleClickAdd = () => {
    document.documentElement.classList.add("dark");
    setDarkMode("dark");
  };

  const handleClickRemove = () => {
    document.documentElement.classList.remove("dark");
    setDarkMode("ligth");
  };

  const handleClickLangEng = () => {
    changeLangEng();
  };

  const handleClickLangEsp = () => {
    changeLangEsp();
  };

  return (
    <header className="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="dark:bg-gray-900 content pt-1.5 px-8">
        <nav className="flex items-center justify-between py-2">
          <h2 className="text-white font-bold text-1xl">Jean Lárez</h2>
          <div className="auth flex items-center mr-12 relative">
            <button className="text-1xl dark:bg-gray-700 dark:hover:bg-white/40 dark:focus:bg-white/40 bg-gray-800 hover:bg-white/40 w-10 mr-2 px-3 py-2 font-bold text-gray-300 rounded-md peer focus:bg-white/40 focus:text-gray-200 transition-all duration-200">
              {darkMode === "dark" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
            <div
              className='w-24 absolute top-10 right-12 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
		after:w-full after:h-full after:-z-20 after:rounded-lg peer-focus:opacity-100 peer-focus:visible transition-all duration-300 invisible opacity-0 
    '
            >
              <ul className="py-3 px-3 flex flex-col gap-2">
                <li
                  className="flex justify-around items-center cursor-pointer bg-sky-600 p-1 rounded-md hover:opacity-90 text-white text-md"
                  onClick={handleClickRemove}
                >
                  <MdOutlineLightMode /> Light
                </li>
                <li
                  className="flex justify-around items-center  cursor-pointer bg-gray-900 p-1 rounded-md hover:opacity-90 text-white text-md"
                  onClick={handleClickAdd}
                >
                  <MdOutlineDarkMode /> Dark
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-xs dark:bg-gray-700 dark:hover:bg-white/40 dark:focus:bg-white/40 bg-gray-800 hover:bg-white/40 w-10 px-2 py-2 font-bold text-gray-300 rounded-md peer focus:bg-white/40 focus:text-gray-200 transition-all duration-200  ">
                {lang}
              </button>
              <div
                className='w-24 absolute top-10 z-10
                after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
                after:w-full after:h-full after:-z-20 after:rounded-lg peer-focus:opacity-100 peer-focus:visible transition-all duration-300 invisible opacity-0
    '
              >
                <ul className="py-3 px-3 flex flex-col gap-2">
                  <li
                    className="flex justify-around items-center cursor-pointer bg-sky-600 p-1 rounded-md hover:opacity-90 text-white text-md"
                    onClick={handleClickLangEng}
                  >
                    ENG
                  </li>
                  <li
                    className="flex justify-around items-center  cursor-pointer bg-gray-900 p-1 rounded-md hover:opacity-90 text-white text-md"
                    onClick={handleClickLangEsp}
                  >
                    ESP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="body mx-64">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl mb-4 ml-4 font-bold text-white tracking-wide">
                Full Stack Developer
              </h1>
              <p className="text-gray-100 dark:text-gray-400 mb-4 ml-4">
                {lang === "ENG"
                  ? "I am passionate about developing websites, applications and programs, giving structure, appearance and interactive behaviors."
                  : "Me apasiona desarrollar sitios web, aplicaciones y programas, dándoles, estructura, apariencia y comportamientos interactivos."}
              </p>

              <p className="text-gray-100 dark:text-gray-400 mb-6 ml-4">
                {lang === "ENG"
                  ? "I also have experience in training people and coordinating teams, allowing me to communicate effectively with colleagues, partners, allies and clients."
                  : "Además tengo experiencia en la formación de personas y la coordinación de equipos, lo que me permite comunicarme eficazmente con colegas, socios, aliados y clientes."}
              </p>

              <button className=" dark:bg-gray-800 bg-gray-900 text-gray-300 ml-3 py-1 px-5 rounded dark:hover:bg-gray-700 hover:bg-gray-800 hover:text-gray-100">
                Resume
              </button>
            </div>
            <div className="w-80 md:max-w-md">
              <img
                className="h-max"
                src="https://i.imgur.com/lYfQh7r.png"
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
