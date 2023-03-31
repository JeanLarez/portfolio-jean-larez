import dataProjects from "../utils/dataCards";
import Card from "../common/Card";

const Grid = () => {
  console.log("Hola Daniel")
  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-black">
            Projects
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataProjects.map((project) => {
            return (
              <Card
                key={project.id}
                title={project.title}
                descrptionEng={project.descrptionEng}
                technologies={project.technologies}
                />
                );
              })}
        </div>
      </div>
              
    </section>
  );
};

export default Grid;
