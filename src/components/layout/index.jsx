import Link from 'next/link';
import React from 'react';
import ContentfulImage from '../ui/ContentfulImage';

const Layout = ({children}) => {
    return (<>

        <header className='bg-blue-900 p-6'>
            <nav className='container'>
                <ul className="flex gap-10 text-center justify-center">
                    <li>
                        <Link href="/" className="flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50 text-xl">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50 text-xl">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50 text-xl">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" className="flex gap-1 text-sm font-medium font-semibold  text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50 text-xl">
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
                <p>You can know more about me in my <a className='underline' href="https://www.linkedin.com/in/antonio-man-mal/">LinkedIn</a> profile 
                    or see my other projects at my <a className='underline' href="https://github.com/AntonioMM8506">GitHub</a></p>
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
                <p>&copy; 2024 Antonio Maldonado</p>
                <br></br>
            </div>
        </footer>
        
    </>)

}//End of Layout

export default Layout;