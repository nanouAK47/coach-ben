import Image from "next/image";

import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row lg:gap-10 px-10">
      <div className="flex flex-col lg:justify-center">
        <h1 className="text-5xl -tracking-wider py-5">
          Ben - Coach sportif à Épinal et ses alentours !
        </h1>
        <div className="flex">
          <strong>5.0</strong>
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
          <a href="#commentaires" className="underline">
            (2 commentaires)
          </a>
        </div>
        <p className="text-muted-foreground mt-3 mb-8 font-bold">
          Boxe, Circuit training, Remise en forme, Renforcement musculaire !
          <br />
          Déplacement chez vous ou lieu public jusqu&apos;à 20km depuis Épinal !
        </p>
        <div className="flex gap-3">
          <Button className="hover:-translate-y-1 transition-all duration-200 ease-linear">
            <a href="tel:0642184410">Remise en forme 📲</a>
          </Button>
          <Button
            variant="ghost"
            className="hover:-translate-y-1 transition-all duration-200 ease-linear"
          >
            <a href="#tarif">Mes tarifs 👇</a>
          </Button>
        </div>
      </div>
      <Image
        src="/ben.jpg"
        alt="Coach Ben"
        width={600}
        height={600}
        className="rounded-3xl mt-8 object-contain"
        priority
      />
    </header>
  );
};
