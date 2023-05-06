import Technologies from "./Technologies";
import { useStore } from "../store/lang";

const Card = ({
  iconCard,
  title,
  descriptionEng,
  descriptionEsp,
  iconTechnologies,
}) => {
  const lang = useStore((state) => state.lang);

  return (
    <article className="rounded-xl dark:bg-none dark:hover:bg-gradient-to-r dark:hover:from-green-300 dark:hover:via-blue-500 dark:hover:to-purple-600 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_3s]">
      <div className="h-full rounded-[10px] dark:bg-gray-900 bg-white p-4 sm:p-6">
        <a href="#">
          <div className="flex items-center mb-5">
            <div className="h-10 w-10 dark:text-pink-800 text-pink-500 text-4xl">
              {iconCard}
            </div>
            <h2 className="mt-2 ml-5 text-xl font-bold dark:text-gray-300 text-black">
              {title}
            </h2>
          </div>
          <p className="mt-1 text-sm dark:text-gray-400 h-16">
            {lang === "ENG" ? descriptionEng : descriptionEsp}
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            {iconTechnologies.map((tech, item) => (
              <Technologies key={item} name={tech} />
            ))}
          </div>
        </a>
      </div>
    </article>
  );
};

export default Card;
