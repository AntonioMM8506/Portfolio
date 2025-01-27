import Link from 'next/link';
import React, { useState, useRef } from 'react';
import ContentfulImage from '../ui/ContentfulImage';
import CopyEmail from './copyEmail';

const Layout = ({children}) => {

    const [homeActive, setHomeActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const  [blogActive, setBlogActive] = useState(false);

    const home = () => {
        setHomeActive(true);
        setProjectsActive(false);
        setBlogActive(false);
    }
    
    const projects = () => {
        setHomeActive(false);
        setProjectsActive(true);
        setBlogActive(false);
    } 

    const blog = () => {
        setHomeActive(false);
        setProjectsActive(false);
        setBlogActive(true);
    }


    return (<>

        <header className='bg-blue-900 p-6'>
            <nav className='container'>
                <ul className="flex gap-10 text-center justify-center">
                    <li>
                        <Link href="/" className={`${homeActive ? "underline underline-offset-8": "bold"} flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-8  text-xl`}
                            onClick={() => { home()}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={`${projectsActive ? "underline underline-offset-8": "bold"} flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-8 text-xl`}
                        onClick={() => { projects()}}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" className={`${blogActive ? "underline underline-offset-8": "bold"} flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-8  text-xl`}
                        onClick={() => { blog()}}
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>    
        
        {/*Content of the site*/}
        <main className="container p-6">{ children }</main>

        <footer className="bg-blue-900 text-sm font-medium text-slate-100 text-center">
            <div className="container items-center py-2">
                <p>You can know more about me in my <a className='underline' href="https://www.linkedin.com/in/antonio-man-mal/" target='_blank'>LinkedIn</a> profile 
                    or see my other projects at my <a className='underline' href="https://github.com/AntonioMM8506" target='_blank'>GitHub</a></p>
                <br></br>
                <ul className="flex gap-4 justify-center">
                    <li>
                        <Link href="https://www.linkedin.com/in/antonio-man-mal/" target="_blank">
                            <ContentfulImage
                                src="media/pictures/logo/linkedin.png"
                                width="50"
                                height="50"
                                alt='LinkedIn'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/AntonioMM8506" target="_blank">
                            <ContentfulImage
                                src="media/pictures/logo/github.png"
                                width="50"
                                height="50"
                                alt='GitHub'
                            />
                        </Link>
                    </li>
                </ul>
                <br></br>

                <CopyEmail/>

                <br></br>
                <p>&copy; 2025 Antonio Maldonado</p>
                <br></br>
            </div>
        </footer>
        
    </>)

}//End of Layout
export default Layout;