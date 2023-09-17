import { saveAs } from "file-saver"
import ContentfulImage from "@/components/ui/ContentfulImage";
import Link from "next/link";
import Image from "next/image";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Explore from "@/components/home/Explore";
import AboutMe from "@/components/home/AboutMe";

export default function Home() {
  
  return (
    <>
      <main>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Explore/>
      </main>
    </>

  )
}//End of Home

