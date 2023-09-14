import Link from 'next/link';
import React from 'react';
import ContentfulImage from '../ui/ContentfulImage';

const Layout = ({children}) => {
    return (<>

        <header className='bg-blue-900 p-8'>
            <nav className='container'>
                <ul className="flex gap-12">
                    <li>
                        <Link href="/" className="flex gap-1 text-sm font-medium font-semibold uppercase text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50">
                            <ContentfulImage
                                src="media/pictures/logo/code-block.png"
                                width="18"
                                height="6"
                                alt='Logo'
                            />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex gap-1 text-sm font-medium font-semibold uppercase text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50">
                            <ContentfulImage
                                src="media/pictures/logo/email.png"
                                width="18"
                                height="6"
                                alt='Logo'
                            />
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" className="flex gap-1 text-sm font-medium font-semibold uppercase text-slate-50 hover:underline underline-offset-4 shadow-lg shadow-blue-500/50">
                            <ContentfulImage
                                src="media/pictures/logo/blogger.png"
                                width="18"
                                height="6"
                                alt='Logo'
                            />
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>    
        
        {/*Content of the site*/}
        <main className="container p-8">{ children }</main>

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
                <p>&copy; 2023 Antonio Maldonado</p>
                <br></br>
            </div>
        </footer>
        
    </>)

}//End of Layout

export default Layout;