import Image from "next/image";
import imageLoader from "../ui/ImageLoader";
import { saveAs } from "file-saver"

const AboutMe = () => {
    //Function used to download a document
    const saveFile = () => {
        saveAs( "media/files/Resume.pdf", "Resume.pdf");
    };

    const baseUrl = process.env.BASE_URL || "";

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
                <Image
                src={`${baseUrl}media/pictures/logo/download.png`}
                loader={imageLoader}
                width="32"
                height="12"
                quality="60"
                alt='Logo'
                />
            </button>
            </div>
        </div>
    )

}//End of AboutMe

export default AboutMe;
