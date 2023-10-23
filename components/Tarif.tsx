import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export const Tarif = () => {
  return (
    <div id="tarif" className="py-5 my-10 lg:bg-transparent lg:px-5">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h2 className="text-4xl -tracking-wider py-5 text-center mb-5 underline decoration-primary decoration-[7px] underline-offset-8">
        Mes tarifs
      </h2>
      <div className="grid gap-y-5 mx-5 text-center md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Tarif horaire</CardTitle>
            <CardDescription>1er cours offert 🎁</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight">39€</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                /h
              </span>
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="m-auto">
              <a href="tel:0642184410">Appeler maintenant !</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tarif packs</CardTitle>
            <CardDescription>1er cours offert 🎁</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight">195€</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                /5h
              </span>
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="m-auto">
              <a href="tel:0642184410">Appeler maintenant !</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tarif horaire</CardTitle>
            <CardDescription>1er cours offert 🎁</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight">390€</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                /10h
              </span>
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="m-auto">
              <a href="tel:0642184410">Appeler maintenant !</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
