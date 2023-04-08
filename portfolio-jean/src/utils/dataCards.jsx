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
      "Website that allows users to post job searches, to which the algorithm automatically assigns the appropriate recruiter according to country, grading and work area.",
    descriptionEsp:
      "Sitio web que permite a los usuarios publicar búsquedas de empleo, a las que el algoritmo asigna automáticamente el reclutador adecuado según el país, califcación y área de trabajo.",
    iconTechnologies: [
      <FaNodeJs size={32} />,
      <SiExpress size={32} />,
      <GrMysql size={32} />,
      <FaReact size={32} />,
      <DiScrum size={32} />,
    ],
  },
  {
    id: 2,
    iconCard: <TbShoppingCart size={48} />,
    title: "Store Vinos",
    descriptionEng:
      "Intuitive and user-friendly interface platform, allowing users to buy drinks online from the comfort of their own homes with smooth transactions and secure payments.",
    descriptionEsp:
      "Plataforma de interfaz intuitiva y fácil de usar, que permite a los usuarios comprar bebidas en línea desde la comodidad de sus propios hogares con transacciones fluidas y pagos seguros.",
    iconTechnologies: [
      <FaNodeJs size={32} />,
      <SiExpress size={32} />,
      <SiPostgresql size={32} />,
      <FaReact size={32} />,
      <DiScrum size={32} />,
    ],
  },
  {
    id: 3,
    iconCard: <TbVideo size={48} />,
    title: "TMDB",
    descriptionEng:
      "Web application, using The Movie Database (TMDB) API to display detailed movie and TV series information, allowing users to filter by title, genre and other parameters",
    descriptionEsp:
      "Aplicación web, utilizando la API de The Movie Database (TMDB) para mostrar información detallada de películas y series de televisión, permitiendo a los usuarios filtrar por título, género y otros parámetros",
    iconTechnologies: [
      <FaNodeJs size={32} />,
      <SiExpress size={32} />,
      <FaReact size={32} />,
      <TbApi size={32} />,
      <DiScrum size={32} />,
    ],
  },
  {
    id: 4,
    iconCard: <TbCloud size={48} />,
    title: "wheather Chanel",
    descriptionEng:
      "Web application to display the weather forecast in real time. It was developed in integration with the OpenWeatherMap API to get the weather data.",
    descriptionEsp:
      "Aplicación web para visualizar el pronóstico del tiempo en tiempo real. Fue desarrollado en integración con la API OpenWeatherMap para obtener los datos meteorológicos.",
    iconTechnologies: [
      <AiOutlineHtml5 size={32} />,
      <TbBrandCss3 size={32} />,
      <SiJavascript size={32} />,
      <DiJqueryLogo size={32} />,
      <TbApi size={32} />,
    ],
  },
  {
    id: 5,
    iconCard: <TbListCheck size={48} />,
    title: "To do List",
    descriptionEng:
      "Web application that allow the user to add new tasks, mark them as completed, delete them and also edit their content.",
    descriptionEsp:
      "Aplicación web que permitir al usuario agregar nuevas tareas, marcarlas como completadas, eliminarlas y también editar su contenido.",
    iconTechnologies: [
      <AiOutlineHtml5 size={32} />,
      <TbBrandCss3 size={32} />,
      <SiJavascript size={32} />,
      <TbBraces size={32} />,
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
      <AiOutlineHtml5 size={32} />,
      <TbBrandCss3 size={32} />,
      <SiJavascript size={32} />,
    ],
  },
];

export default dataProjects;
