import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="px-5">
      <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex flex-col justify-center items-center uppercase"
          >
            <p className="text-xl font-bold lg:text-2xl">Coach Ben</p>
            <span className="text-[0.6em] tracking-wide">
              Epinal et ses alentours
            </span>
          </a>
          <span className="block text-sm text-gray-500 text-center mt-2 dark:text-gray-400">
            © 2023 Coach Ben . Tous droits réservés.
          </span>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Email :{" "}
          <a href="mailto:nael.boulayoune@gmail.com" className="underline">
            nael.boulayoune@gmail.com
          </a>
        </span>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Téléphone :{" "}
          <a href="tel:0642184410" className="underline">
            06 42 18 44 10
          </a>
        </span>
        <a href="http://nb-web.fr" target="_blank">
          <Image
            src="/nb_web-light.png"
            alt="Logo NB_web"
            width={125}
            height={125}
            className="object-contain mt-4 flex mx-auto dark:hidden"
          />
          <Image
            src="/nb_web.png"
            alt="Logo NB_web"
            width={125}
            height={125}
            className="object-contain mt-4 mx-auto hidden dark:flex"
          />
        </a>
      </div>
    </footer>
  );
};
