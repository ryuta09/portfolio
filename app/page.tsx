import About from "@/components/About";
import Footer from "@/components/Footer";
import MailForm from "@/components/mailForm";
import Projects from "@/components/projects";
import Skils from "@/components/skils";

export default function Home() {
  return <main className="flex flex-col items-center px-4 ">
    <About />
    <Projects />
    <Skils />
    <MailForm />
    <Footer />
  </main>;
}
