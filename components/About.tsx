import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const About = () => {
  return (
    <div id="a-propos" className="py-5 my-10 lg:px-5">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h2 className="text-4xl -tracking-wider py-5 text-center mb-5 underline decoration-primary decoration-[7px] underline-offset-8">
        A propos
      </h2>
      <div className="grid gap-y-5 mx-5 text-center md:grid-cols-2 md:gap-x-5">
        <Card>
          <CardHeader>
            <CardTitle className="mb-5">Expérience</CardTitle>
            <CardDescription>
              Je suis <strong>éducateur sportif</strong> et
              <strong> instructeur de boxe anglaise</strong> depuis plus de
              <strong> 20 ans</strong> et j&apos;ai accompagné plusieurs
              compétiteurs à devenir champion de France. Riche de mon
              <strong> expérience</strong> je vous <strong> aiderai</strong> à
              <strong> développer</strong> votre
              <strong> propre potentiel</strong> et à vous
              <strong> épanouir</strong> pleinement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/arrow.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto flex dark:hidden"
            />
            <Image
              src="/arrow-light.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto hidden dark:flex"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="mb-5">Démarche</CardTitle>
            <CardDescription>
              Après un <strong> 1er entretien téléphonique</strong>, nous
              organiserons une <strong>séance test </strong> pour situer votre
              niveau actuel. Un <strong>suivi personnalisé</strong> est alors
              mis en place dès le <strong>1er rendez-vous</strong>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/arrow.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto flex dark:hidden"
            />
            <Image
              src="/arrow-light.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto hidden dark:flex"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="mb-5">Accompagnement</CardTitle>
            <CardDescription>
              Je <strong>varie</strong> aussi bien <strong>le matériel</strong>{" "}
              que <strong>les séances</strong> pour un maximum de diversités en
              cherchant à <strong>être le plus efficace</strong> possible par
              rapport <strong>aux objectifs</strong> de chacun.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/arrow.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto flex dark:hidden"
            />
            <Image
              src="/arrow-light.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto hidden dark:flex"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="mb-5">Adaptation</CardTitle>
            <CardDescription>
              <strong>J&apos;accompagne</strong> notamment{" "}
              <strong>les chefs d&apos;entreprise</strong> et{" "}
              <strong> les entrepreneurs</strong> dans le but{" "}
              <strong>d&apos;optimiser</strong> leur <strong>temps</strong> et
              d’être plus <strong>efficace</strong> dans{" "}
              <strong>l&apos;organisation</strong> et la mise en place de leur
              suivi en corrélation avec leur vie professionnelle.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/arrow.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto flex dark:hidden"
            />
            <Image
              src="/arrow-light.svg"
              alt="fleche du bas"
              width={50}
              height={50}
              className="m-auto hidden dark:flex"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
