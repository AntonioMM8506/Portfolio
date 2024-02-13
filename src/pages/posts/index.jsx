import React, { useState, useEffect, createContext, useContext } from "react";
import { client } from "@/lib/contentful/client";
import PostCard from '@/components/posts/PostCard'

const Posts = ({ posts }) => {

    const [allActive, setAllActive] = useState(true);
    const [bookActive, setBookActive] = useState(false);
    const [profActive, setProfActive] = useState(false);
    const [codeActive, setCodeActive] = useState(false);
    const [displayItems, setDisplayItems] = useState(posts);

    //fetch the elements by category, using the posts parameter
    const books = posts.filter((blog) => blog.fields.title.includes('Book Recommendation'));
    const profDev = posts.filter((blog) => blog.fields.title.includes('Professional Development'));
    const codeChal = posts.filter((blog) => blog.fields.title.includes('Code Challenge'));

    const showAll = () =>{
        setAllActive(true);
        setBookActive(false);
        setProfActive(false);
        setCodeActive(false);

        setDisplayItems(posts)
    }

    const showBooks = () => {
        setBookActive(true);
        setAllActive(false);
        setProfActive(false);
        setCodeActive(false);

        setDisplayItems(books);
    }

    const showProf = () => {
        setProfActive(true);
        setAllActive(false);
        setBookActive(false);
        setCodeActive(false);

        setDisplayItems(profDev);
    }

    const showCode = () => {
        setCodeActive(true);
        setAllActive(false);
        setBookActive(false);
        setProfActive(false);

        setDisplayItems(codeChal);
    }

    //Hooks don't update immediately. They work in an asynchronous way. So, in order to use the updated values
    //after setting the state, useEffect is the best option, as the second parameters expects an array with all
    //the variables to take in consideration.
    useEffect( () => {
        if(bookActive===true && profActive===true && codeActive===true){
            showAll();
        }  
    }, [bookActive, profActive, codeActive])


    return (
        <>
            <h1 className="py-2 text-center font-roboto text-blue-700 font-semibold text-3xl">
                Welcome to my Blog
            </h1>
            <div className="text-center text-lg">
                <h2 className="py-1">
                    Here I will post things of my interest, whether a book recommendation, 
                    professional development advice, coding excercises and many other things.
                </h2>
                <h2 className="py-1">
                    Thanks for reading.
                </h2>
                <h2 className="py-1">
                    Happy coding!
                </h2>
            </div>

            <div className="flex justify-center text-center gap-6 py-1">
                <button
                    className={`${ allActive ? "bg-blue-900": "bg-slate-700"} px-2 py-1 w-50 rounded-md  hover:bg-cyan-600 font-roboto text-white text-xl font-medium`}
                    onClick={() => { showAll(); }}
                >
                    Show All
                </button>
                <button
                    className={`${ bookActive ? "bg-blue-900": "bg-slate-700"} px-2 py-1 w-50 rounded-md  hover:bg-cyan-600 font-roboto text-white text-xl font-medium`}
                    onClick={() => { showBooks(); }}
                >
                    Book Recommendation
                </button>
                <button
                    className={`${ profActive ? "bg-blue-900": "bg-slate-700"} px-2 py-1 w-50 rounded-md  hover:bg-cyan-600 font-roboto text-white text-xl font-medium`}
                    onClick={() => { showProf(); }}
                >
                    Professional Development
                </button>
                <button
                    className={`${ codeActive ? "bg-blue-900": "bg-slate-700"} px-2 py-1 w-50 rounded-md  hover:bg-cyan-600 font-roboto text-white text-xl font-medium`}
                    onClick={() => { showCode();}}
                >
                    Code Challenges
                </button>
            </div>
            <br></br>
            <section>
                <div className = 'container'>
                    {/*with the getStaticProps function, iterates over the retrieved results and then generates
                    the PostCard items with the retrieved data*/}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
                        {
                            displayItems.map((post, i) => (
                                <PostCard key={post.fields.slug} post={post}/>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}//End of index


//get all the elements of the type post from the contentful server
export const getStaticProps = async() => {
    const response = await client.getEntries({ content_type:'post' });
    return{
        props: {
            posts: response.items,
            revalidate: 60
        }
    }
}//End of getStaticProps

export default Posts;
