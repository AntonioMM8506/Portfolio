import { saveAs } from "file-saver"
import ContentfulImage from "@/components/ui/ContentfulImage";
import Link from "next/link";
import Image from "next/image";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Explore from "@/components/home/Explore";

export default function Home() {
  
  //Function used to download a document
  const saveFile = () => {
    saveAs( "media/files/Resume.pdf", "Resume.pdf");
  };

  return (
    <>
      <main>
        {/*Title*/}
        <div className="container py-4 flex flex-col items-center text-center">
          <h1 className="font-bold py-2 text-sky-500 uppercase text-5xl font-oswald">
            Antonio Maldonado
          </h1>
          <h2 className="font-semibold text-cyan-500 text-4xl font-oswald">
            Fullstack Web Developer
          </h2>
        </div>

        {/*Abstract - About Me*/}
        <div className="container py-4 flex flex-col items-center text-center">
          <h3 className="font-roboto text-blue-700 font-bold text-3xl">
            About me
          </h3>
          <p className="py-2 font-roboto text-lg">
            I'm a passionate Fullstack Web Developer with a knack for crafting clean, 
            efficient, and visually appealing digital solutions. I thrive on turning 
            creative ideas into functional, user-friendly applications.
          </p>
          <p className="py-2 font-roboto text-lg">
            My journey in web development began with a love for problem-solving and an 
            insatiable curiosity for how things work. Over the years, I've honed my skills 
            in HTML, CSS, and JavaScript, and I'm proficient in a variety of front-end frameworks 
            like React and Next.js. On the server-side, I have knowledge working with technologies such as Node.js 
            and Express, integrating databases like MongoDB and SQL to create robust back-end systems.
          </p>
        </div>


        {/*Button to download CV*/} 
        <div className="container py-4 flex flex-col items-center text-center">
          <p className="py-2 font-roboto text-xl">You can give a look to my Resume here:</p>
          <button className="flex gap-2 w-40 h-11 bg-blue-900 hover:bg-cyan-600 p-1 font-roboto justify-center rounded-md text-white text-2xl" size="medium" onClick={saveFile}>
            Resume
            <ContentfulImage
              src="media/pictures/logo/download.png"
              width="32"
              height="12"
              alt='Logo'
            />
          </button>
        </div>


        {/*Pictures of skills*/}
        <div className="container py-4 flex flex-col items-center text-center">
          <h3 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
            Professional Skills
          </h3>
          <Skills/>
        </div>
        <br></br>

        {/*Projects section*/}
        <div className="container py-4 flex flex-col items-center text-center">
          <h3 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
            Projects
          </h3>
          <span className="px-2 font-roboto text-lg">
            I have experience working for a few clients. These are some of them:
          </span>
        </div>
        <Projects/>
        <br></br>
        <div className="container py-4 flex flex-col items-center text-center">
          <span className="px-2 font-roboto text-lg">
            I have also worked in personal projects. You can give them a look visiting 
            my <a className="underline font-semibold" href="https://github.com/AntonioMM8506">GitHub</a>. 
          </span>
          <span className="px-2 font-roboto text-lg">
            Skills grow. So will this portfolio. Just wait for it.
          </span>
        </div>
        <br></br>

        <Explore/>



      </main>
    </>

  )
}//End of Home

