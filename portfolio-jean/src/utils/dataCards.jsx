import {
  IconSearch,
  IconShoppingCart,
  IconVideo,
  IconCloud,
  IconListCheck,
  IconTicTac,
} from "@tabler/icons-react";

const dataProjects = [
  {
    id: 1,
    icon: <IconSearch size={48} />,
    title: "Bumeran Selecta",
    descriptionEng:
      "Website that allows users to post job searches, to which the algorithm automatically assigns the appropriate recruiter according to country, grading and work area.",
    descriptionEsp:
      "Sitio web que permite a los usuarios publicar búsquedas de empleo, a las que el algoritmo asigna automáticamente el reclutador adecuado según el país, califcación y área de trabajo.",
    technologies: ["Node", "Express", "MySQL", "React", "Scrum"],
  },
  {
    id: 2,
    icon: <IconShoppingCart size={48} />,
    title: "Store Vinos",
    descriptionEng:
      "Intuitive and user-friendly interface platform, allowing users to buy drinks online from the comfort of their own homes with smooth transactions and secure payments.",
    descriptionEsp:
      "Plataforma de interfaz intuitiva y fácil de usar, que permite a los usuarios comprar bebidas en línea desde la comodidad de sus propios hogares con transacciones fluidas y pagos seguros.",
    technologies: ["Node", "Express", "Psql", "React", "Scrum"],
  },
  {
    id: 3,
    icon: <IconVideo size={48} />,
    title: "TMDB",
    descriptionEng:
      "Web application, using The Movie Database (TMDB) API to display detailed movie and TV series information, allowing users to filter by title, genre and other parameters",
    descriptionEsp:
      "Aplicación web, utilizando la API de The Movie Database (TMDB) para mostrar información detallada de películas y series de televisión, permitiendo a los usuarios filtrar por título, género y otros parámetros",
    technologies: ["Node", "Express", "React", "Scrum"],
  },
  {
    id: 4,
    icon: <IconCloud size={48} />,
    title: "wheather Chanel",
    descriptionEng:
      "Web application to display the weather forecast in real time. It was developed in integration with the OpenWeatherMap API to get the weather data.",
    descriptionEsp:
      "Aplicación web para visualizar el pronóstico del tiempo en tiempo real. Fue desarrollado en integración con la API OpenWeatherMap para obtener los datos meteorológicos.",
    technologies: ["Html", "CSS", "JavaScript", "Jquery"],
  },
  {
    id: 5,
    icon: <IconListCheck size={48} />,
    title: "To do List",
    descriptionEng:
      "Web application that allow the user to add new tasks, mark them as completed, delete them and also edit their content.",
    descriptionEsp:
      "Aplicación web que permitir al usuario agregar nuevas tareas, marcarlas como completadas, eliminarlas y también editar su contenido.",
    technologies: ["Html", "CSS", "JavaScript", "POO"],
  },
  {
    id: 6,
    icon: <IconTicTac size={48} />,
    title: "Color Game",
    descriptionEng:
      "Interactive application that presents the user with a color in RGB format, to choose the color box that matches the given value.",
    descriptionEsp:
      "Aplicación interactiva que presenta al usuario un color en formato RGB, para elejir el cuadro de color que coincide con el valor dado.",
    technologies: ["Html", "CSS", "JavaScript"],
  },
];

export default dataProjects;
