import { About } from "@/components/About";
import { Questions } from "@/components/Questions";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Tarif } from "@/components/Tarif";
import { Commentaires } from "@/components/Commentaires";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <Header />
        <Tarif />
        <About />
        <Contact />
        <Questions />
        <Commentaires />
        <Footer />
      </div>
    </div>
  );
}
