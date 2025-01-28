import Image from "next/image";
import imageLoader from "../ui/ImageLoader";
import { saveAs } from "file-saver"
import ImageWithLoader from "../layout/imageWithLoader";

const AboutMe = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL  || "";

    //Function used to download a document
    const saveFile = () => {
        saveAs( "media/files/Resume.pdf", "AMM_Resume.pdf");
    };

    return(
        <div>
            {/*Title*/}
            <div className="container py-4 flex flex-col items-center text-center">
                <h1 className="font-bold py-2 text-sky-500 uppercase text-5xl font-oswald">
                    Antonio Maldonado
                </h1>
                <h2 className="font-semibold text-cyan-500 text-4xl font-oswald">
                    Fullstack Web Developer
                </h2>
            </div>

            {/*About me Section*/}
            <div className="container py-4 flex flex-col items-center text-center p-10">
                <h3 className="font-roboto text-blue-700 font-bold text-3xl">
                    About me
                </h3>
                <div className="flex-shrink-0 ml-4">
                    <ImageWithLoader
                        src={`${baseUrl}media/pictures/Various/myself.jpeg`}
                        width="200"
                        height="200"
                        quality="60"
                        className='rounded-full m-0'
                        alt='Myself'
                    />
                </div>
                <p className="py-2 font-roboto text-lg">
                    I'm a passionate Fullstack Web Developer with a talent for crafting clean, 
                    efficient, and visually appealing digital solutions. I thrive on turning 
                    creative ideas into functional, user-friendly applications.
                </p>

                <p className="py-2 font-roboto text-lg">
                    My journey in web development began with a love for problem-solving and an 
                    insatiable curiosity for how things work. Over the years, I've honed my skills 
                    in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and I'm proficient in a variety of front-end frameworks 
                    like <b>React</b> and <b>Next.js</b>. On the server-side, I have knowledge working with technologies such as <b>Node.js</b> and <b>Express</b>,
                    integrating, both, relational and non-relational databases such as <b>SQL</b> and <b>MongoDB</b>. 
                    Also, I have worked in Agile environments. Tools for organization such as <b>Azure DevOps</b> and for CD/CI 
                    like <b>GitHub Actions</b> are familiar to me.
                </p>
            </div>


            {/*Button to download CV*/} 
            <div className="container py-4 flex flex-col items-center text-center">
                <button className="flex gap-2 w-40 h-11 bg-blue-900 hover:bg-cyan-600 p-1 font-roboto justify-center rounded-md text-white text-2xl" size="medium" onClick={saveFile}>
                    Resume
                    <ImageWithLoader
                        src={`${baseUrl}media/pictures/logo/download.png`}
                        width="32"
                        height="12"
                        quality="60"
                        alt='Logo'
                    />
                </button>
            </div>
            <br></br>
        </div>
    )

}//End of AboutMe

export default AboutMe;
