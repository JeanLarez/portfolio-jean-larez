import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header class="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed">
      <div class="content pt-1.5 px-8">
        <nav class="flex items-center justify-between">
          <h2 class="text-white font-bold text-2xl ml-12">Jean Lárez</h2>
          <div class="auth flex items-center mr-12">
            <button class="py-2 px-3 rounded text-white hover:bg-white hover:text-[#0a66c2]">
              <FaLinkedin class="text-4xl" />
            </button>
            <button class="py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">
              <BsGithub class="text-4xl text-white" />
            </button>
          </div>
        </nav>
        <div class="body mx-8">
          <div class="md:flex items-center justify-center">
            <div class="w-full md:w-1/2 pt-6">
              <h1 class="text-4xl mb-8 ml-4 font-bold text-white tracking-wide">
                Full Stack Developer
              </h1>
              <p class="text-gray-1200 text-lg mr-16 mb-8 ml-4">
                I am passionate about developing websites, applications and
                programs by giving them structure, appearance and interactive
                behaviors by applying industry-standard technologies.
              </p>

              <p class="text-gray-1200 text-lg mr-16 mb-8 ml-4">
                I also have experience in training and mentoring people and
                coordinating work teams, allowing me to communicate effectively
                with team members, clients and stakeholders.
              </p>

              <button class="bg-gray-900 text-gray-200 ml-3 py-2 px-5 rounded  hover:bg-gray-800 hover:text-gray-100">
                Resume
              </button>
            </div>
            <div class="w-96 md:max-w-md">
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
