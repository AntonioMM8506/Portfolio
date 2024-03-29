import Link from "next/link";
import Image from "next/image";
import imageLoader from "../ui/ImageLoader";

const Explore = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    return(
        <>
            
            <h3 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
                Explore
            </h3>
            <div className="flex grid lg:grid-cols-3 sm:grid-cols-1">

                {/*Text to redirect to the Blog section*/}
                <div className="container py-4 flex flex-col items-center text-center">
                    <span className="px-2 font-roboto text-lg">
                        When I'm not coding, you can find me reading, drawing or studying new things, As one of my teachers 
                        once told me "Sharing your knowledge is a privilege", so I decided to start a Blog, you can give it a 
                        look <a className="underline font-semibold" href="/posts">here </a>
                    </span>
                    <Link href="/posts">
                        <Image
                            src={`${baseUrl}media/pictures/logo/book.png`}
                            loader={imageLoader}
                            width="120"
                            height="120"
                            quality="60"
                            alt='Logo'
                        />
                    </Link>
                </div>
                
                {/*Text to redirect to the Projects section*/}
                <div className="container py-4 flex flex-col items-center text-center">
                    <span className="px-2 font-roboto text-lg">
                        I have been lucky enough to have worked with different customers and for projects of my own interest. 
                        You can take a peek <a className="underline font-semibold" href="/projects">here</a>. Each project is 
                        meticulously crafted to solve real-world problems and push the boundaries of innovation.
                    </span>

                    <Link href="/projects">
                        <Image
                            src={`${baseUrl}media/pictures/logo/codeblock.png`}
                            loader={imageLoader}
                            width="140"
                            height="140"
                            quality="60"
                            alt='Logo'
                        />
                    </Link>

                </div>

                {/*Text to redirect to the Contact section*/}
                <div className="container py-4 flex flex-col items-center text-center">
                    <span className="px-2 font-roboto text-lg">
                        Do you have any questions, want to discuss a project or just want to share some opinion?. You can visit 
                        my <a className="underline font-semibold" href="https://www.linkedin.com/in/antonio-man-mal/">LinkedIn</a> profile 
                        or you can send me an email <a className="underline font-semibold" href="/contact">here</a>. I will be pleased 
                        to know about you. Thank you for reaching out!
                    </span>
                    <Link href="/contact">
                        <Image
                            src={`${baseUrl}media/pictures/logo/mail-send.png`}
                            loader={imageLoader}
                            width="140"
                            height="140"
                            quality="60"
                            alt='Logo'
                        />
                    </Link>
                </div>


            </div>
        </>

    )
}//End of explore

export default Explore;
