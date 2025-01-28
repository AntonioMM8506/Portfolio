import Image from "next/image";
import Link from "next/link";
import ImageWithLoader from "../layout/imageWithLoader";

const MyProjects = () => {
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL  || "";
  //const baseUrl = "http://localhost:1234/";

    return(
        <div>
          <div className="container py-4 flex flex-col items-center text-center">
            <h3 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
              Professional Projects
            </h3>
            <br></br>
            <span className="px-2 font-roboto text-lg">
              I have experience working for different clients. These are some of them:
            </span>
          </div>

          {/*Cards--------------------------------------------*/}
          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 sm:gap-20 md:gap-10 py-8 lg:space-y-0 md:space-y-1 sm:space-y-20 space-y-10'> 
          

            <div className="h-[500px] rounded-md overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,1.5)] py-10 border">
                  <div className="flex justify-center">
                      <ImageWithLoader
                          alt="Picture"
                          src={`${baseUrl}media/pictures/Various/HELADOPOLIS.jpg`}
                          width="175"
                          height="175"
                          quality="60"
                          className="object-cover"
                      />
                  </div>
                  <div className="p-4">
                      <h3 className="text-2xl text-center mb-1 leading-snug">Heladopolis Puebla</h3>
                      <h2 className="text-xl text-center mb-1 leading-snug underline">Commercial Website</h2>
                      <p className="text-base mb-4 py-2 text-center">
                        Website dedicated to demonstrate the variety of products the company can offer.
                        The resources to contact the company are also included.
                      </p>
                  </div>
              <Link href="https://heladopolis.com/" target="_blank" className="flex justify-center py-2">
              <button className="px-4 py-2 w-40 bg-blue-900 rounded-md font-roboto hover:bg-cyan-600 text-white font-medium">Go to site</button>
              </Link>
            </div>


            <div className="h-[500px] rounded-md overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,1.5)] py-10 border">
                  <div className="flex justify-center">
                      <ImageWithLoader
                          alt="Picture"
                          src={`${baseUrl}media/pictures/Various/SIMAU.jpeg`}
                          width="240"
                          height="240"
                          quality="60"
                          className="object-cover"
                      />
                  </div>
                  <div className="p-4">
                      <h3 className="text-xl text-center mb-1 leading-snug">SIMAU México</h3>
                      <h2 className="text-xl text-center mb-1 leading-snug underline">Commercial Website</h2>
                      <p className="text-base mb-4 py-2 text-center">
                        Website dedicated to demonstrate the insdustrial solutions the company can 
                        offer. The resources to contact the company are included. 
                      </p>
                  </div>
                  <br></br>
              <Link href="http://simau.com.mx/" target="_blank" className="flex justify-center py-2">
                <button className="px-4 py-2 w-40 bg-blue-900 rounded-md font-roboto hover:bg-cyan-600 text-white font-medium">Go to site</button>
              </Link>
            </div>


                        <div className="h-[500px] rounded-md overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,1.5)] py-10 border">
                  <div className="flex justify-center">
                      <ImageWithLoader
                          alt="Picture"
                          src={`${baseUrl}media/pictures/Various/MOTHERSON.jpg`}
                          width="200"
                          height="200"
                          quality="60"
                          className="object-cover"
                      />
                  </div>
                  <br></br>
                  <div className="p-4">
                      <h3 className="text-2xl text-center mb-1 leading-snug">Samvardhana Motherson Pegurform Automotive</h3>
                      <h2 className="text-xl text-center mb-1 leading-snug underline">
                        Adhoc solution for label traceability
                      </h2>
                      <p className="text-base mb-4 py-2 text-center">
                        Web Application designed for shipments traceability and delivery to key customers 
                        like Audi and VW. A database SQL was implemented in order to register all the registers. 
                      </p>
                  </div>
            </div>


          </div>
          {/*Cards--------------------------------------------*/}

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

      </div>
    );

}

export default MyProjects;
