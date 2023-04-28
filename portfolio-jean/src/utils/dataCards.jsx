import {
  TbSearch,
  TbShoppingCart,
  TbVideo,
  TbApi,
  TbCloud,
  TbListCheck,
  TbTicTac,
  TbBrandCss3,
  TbBraces,
} from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiJavascript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiJqueryLogo, DiScrum } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

const dataProjects = [
  {
    id: 1,
    iconCard: <TbSearch size={48} />,
    title: "Bumeran Selecta",
    descriptionEng:
      "Website that allows users to post job searches and assign the appropriate recruiter according to country, qualification and work area.",
    descriptionEsp:
      "Sitio web que permite a los usuarios publicar búsquedas de empleo y asignar el reclutador adecuado según el país, califcación y área de trabajo.",
    iconTechnologies: [
      <FaNodeJs />,
      <SiExpress />,
      <GrMysql />,
      <FaReact />,
      <DiScrum />,
    ],
  },
  {
    id: 2,
    iconCard: <TbShoppingCart size={48} />,
    title: "Store Vinos",
    descriptionEng:
      "Intuitive and easy-to-use web-based application that allows users to select and buy drinks online from the comfort of their home",
    descriptionEsp:
      "Aplicación Web de interfaz intuitiva y facil de usar, que permite a los usuarios seleccionar y comprar bebidas en línea desde la comodidad de su hogar",
    iconTechnologies: [
      <FaNodeJs />,
      <SiExpress />,
      <SiPostgresql />,
      <FaReact />,
      <DiScrum />,
    ],
  },
  {
    id: 3,
    iconCard: <TbVideo size={48} />,
    title: "TMDB",
    descriptionEng:
      "Web application, which obtains data from The Movie Database (TMDB) API to display detailed information of movies, short films and tv series",
    descriptionEsp:
      "Aplicación web, que obtiene datos desde la API de The Movie Database (TMDB) para mostrar información detallada de películas, cortometrajes y series de tv",
    iconTechnologies: [
      <FaNodeJs />,
      <SiExpress />,
      <FaReact />,
      <TbApi />,
      <DiScrum />,
    ],
  },
  {
    id: 4,
    iconCard: <TbCloud size={48} />,
    title: "Wheather Chanel",
    descriptionEng:
      "Website developed in integration with OpenWeatherMap API to get real-time weather data and visualize weather forecast.",
    descriptionEsp:
      "Sitio web desarrollado en integración con la API OpenWeatherMap para obtener en tiempo real los datos meteorológicos y visualizar el pronóstico del tiempo.",
    iconTechnologies: [
      <AiOutlineHtml5 />,
      <TbBrandCss3 />,
      <SiJavascript />,
      <DiJqueryLogo />,
      <TbApi />,
    ],
  },
  {
    id: 5,
    iconCard: <TbListCheck size={48} />,
    title: "To do List",
    descriptionEng:
      "Website that allow the user to add new tasks to a list, mark them as completed, delete them and also edit their content.",
    descriptionEsp:
      "Sitio web que permitir al usuario agregar nuevas tareas a una lista, marcarlas como completadas, eliminarlas y también editar su contenido.",
    iconTechnologies: [
      <AiOutlineHtml5 />,
      <TbBrandCss3 />,
      <SiJavascript />,
      "OOP",
    ],
  },
  {
    id: 6,
    iconCard: <TbTicTac size={48} />,
    title: "Color Game",
    descriptionEng:
      "Interactive application that presents the user with a color in RGB format, to choose the color box that matches the given value.",
    descriptionEsp:
      "Aplicación interactiva que presenta al usuario un color en formato RGB, para elejir el cuadro de color que coincide con el valor dado.",
    iconTechnologies: [
      <AiOutlineHtml5 />,
      <TbBrandCss3 />,
      <SiJavascript />,
    ],
  },
];

export default dataProjects;
