import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header class="bg-sky-500 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed">
      <div class="content pt-1.5 px-8">
        <nav class="flex items-center justify-between">
          <h2 class="text-white font-bold text-3xl ml-12">Jean Lárez</h2>
          <div class="auth flex items-center">
            <button class="py-2 px-3 rounded text-white hover:bg-white hover:text-[#0a66c2]">
              <FaLinkedin class="text-5xl" />
            </button>
            <button class="py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">
              <BsGithub class="text-5xl text-white" />
            </button>
          </div>
        </nav>
        <div class="body mx-8">
          <div class="md:flex items-center justify-center">
            <div class="w-full md:w-1/2 pt-6">
              <h1 class="text-4xl mb-8 ml-4 font-bold text-white tracking-wide">
                Full Stack Developer
              </h1>
              <p class="text-gray-1200 text-lg ml-4 mb-8 ">
                I am passionate about developing websites, applications and
                programs by giving them structure, appearance and interactive
                behaviors by applying industry-standard technologies.
              </p>

              <p class="text-gray-1200 text-lg ml-4 mb-8">
                I also have experience in training people and coordinating work
                teams.
              </p>

              <button class="bg-gray-900 text-gray-200 ml-3 py-2 px-5 rounded  hover:bg-gray-800 hover:text-gray-100">
                Resume
              </button>
            </div>
            <div class="w-full md:max-w-md">
              <img
                class="h-max"
                src="src/assets/jean_perfil_izquierdo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
