import { saveAs } from "file-saver"

export default function Home() {
  
  //Function used to download a document
  const saveFile = () => {
    saveAs("media/files/Resume.pdf", "Resume.pdf");
  };

  return (
    <>
      <main>
        <h1>
          Antonio Maldonado
        </h1>
        <h2>
          Fullstack Web Developer
        </h2>
        <br></br>
        <h3>
          About me
        </h3>
        <p>
        I'm a passionate Fullstack Web Developer with a knack for crafting clean, 
        efficient, and visually appealing digital solutions. I thrive on turning 
        creative ideas into functional, user-friendly applications.
        </p>
        <br></br>
        <p>
          My journey in web development began with a love for problem-solving and an 
          insatiable curiosity for how things work. Over the years, I've honed my skills 
          in HTML, CSS, and JavaScript, and I'm proficient in a variety of front-end frameworks 
          like React and Next.js. On the server-side, I have knowledge working with technologies such as Node.js 
          and Express, integrating databases like MongoDB and SQL to create robust back-end systems.
        </p>
        <br></br>

        {/*Button to download CV*/}
        <p>
          You can give a look to my Resume here
        </p>
        <button className="w-32 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white text-xl" size="medium" onClick={saveFile}>Resume</button>
        <br></br>
        <br></br>

        {/*TODO - Carousel of pictures*/}
        <h3>
          My Toolkit
        </h3>
        <br></br>

        {/*TODO - Text to redirect to the Blog section*/}
        <span>
          When I'm not coding, you can find me reading, drawing or studying new things, As one of my teachers 
          once told me "Sharing your knowledge is a privilege", so I decided to start a Blog, you can give it a look 
          <a href="/posts"> here </a>
        </span>

      </main>
    </>

  )
}//End of Home

