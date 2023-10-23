import Image from "next/image";

export const Commentaires = () => {
  return (
    <div id="commentaires" className="py-5 my-10 px-5 lg:px-10">
      <div className="flex items-center mb-4">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
            />
          ))}
      </div>
      <blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
          Ben est un super coach ! Ses entraînements son intenses et formateur.
          Nous progressons très vite et il est très pédagogue. Je vous le
          recommande !
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-6">
        <Image
          src="/avatar.svg"
          alt="Balou, élève de Ben"
          width={24}
          height={24}
          className="rounded-full flex dark:hidden"
        />
        <Image
          src="/avatar-light.svg"
          alt="Balou, élève de Ben"
          width={24}
          height={24}
          className="rounded-full hidden dark:flex"
        />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            Balou
          </cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
            Élève de Ben
          </cite>
        </div>
      </figcaption>

      <div className="flex items-center mb-4 mt-8">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
            />
          ))}
      </div>
      <blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
          Ben est mon coach pour la boxe anglaise. Et j’ai énormément progressé
          grâce à lui. Son enseignement et dure et juste et c’est entraînement
          sont égale à dés entraînement de professionnels. Si vous souhaitez
          progresser rapidement et prendre du plaisir à boxer, Ben est coach
          qu’il vous faut !
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-6">
        <Image
          src="/avatar.svg"
          alt="Yanis, élève de Ben"
          width={24}
          height={24}
          className="rounded-full flex dark:hidden"
        />
        <Image
          src="/avatar-light.svg"
          alt="Yanis, élève de Ben"
          width={24}
          height={24}
          className="rounded-full hidden dark:flex"
        />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            Yanis
          </cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
            Élève de Ben
          </cite>
        </div>
      </figcaption>
    </div>
  );
};
