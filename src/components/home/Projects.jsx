import ContentfulImage from "../ui/ContentfulImage";
import Link from "next/link";

const Projects = () => {

    return(
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-20'> 
          <div className="rounded-md overflow-hidden shadow-md">
                <div className="flex justify-center">
                    <ContentfulImage
                        alt="Picture"
                        src="media/pictures/Various/HELADOPOLIS.jpg"
                        width="125"
                        height="125"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-2xl text-center mb-1 leading-snug">Heladopolis Puebla</h3>
                    <h2 className="text-xl text-center mb-1 leading-snug underline">Commercial Website</h2>
                    <p className="text-base mb-4 py-2">
                      Website dedicated to demonstrate the variety of products the company can offer. Also,
                      the resources to contact the company are also included.
                    </p>
                </div>
            <Link href="https://heladopolis.com/" target="_blank" className="flex justify-center py-2">
              <button className="px-4 py-2 w-40 bg-blue-900 rounded-md font-roboto text-white font-medium">Go to site</button>
            </Link>
          </div>

          <div className="rounded-md overflow-hidden shadow-md">
                <div className="flex justify-center">
                    <ContentfulImage
                        alt="Picture"
                        src="media/pictures/Various/SIMAU.jpeg"
                        width="200"
                        height="200"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl text-center mb-1 leading-snug">SIMAU México</h3>
                    <h2 className="text-xl text-center mb-1 leading-snug underline">Commercial Website</h2>
                    <p className="text-base mb-4 py-2">
                      Website dedicated to demonstrate the variety of insdustrial solutions the company can 
                      offer. The resources to contact the company are included. 
                    </p>
                </div>
            <Link href="http://simau.com.mx/" target="_blank" className="flex justify-center py-2">
              <button className="px-4 py-2 w-40 bg-blue-900 rounded-md font-roboto text-white font-medium">Go to site</button>
            </Link>
          </div>

          <div className="rounded-md overflow-hidden shadow-md">
                <div className="flex justify-center">
                    <ContentfulImage
                        alt="Picture"
                        src="media/pictures/Various/MOTHERSON.jpg"
                        width="200"
                        height="200"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl text-center mb-1 leading-snug">Motherson Automotive</h3>
                    <h2 className="text-xl text-center mb-1 leading-snug underline">
                      Adhoc solution for label traceability
                    </h2>
                    <p className="text-base mb-4 py-2">
                      Web Application designed for shipments traceability and delivery to key customers 
                      like Audi and VW. A database SQL was implemented in order to register all the registers. 
                    </p>
                </div>
            <Link href="http://simau.com.mx/" target="_blank" aria-label="Heladopolis">
            </Link>
          </div>
        </div>
      </div>
    );

}

export default Projects;
