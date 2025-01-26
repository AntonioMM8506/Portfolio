import React from "react";
import { client } from "@/lib/contentful/client";
import PostCard from '@/components/posts/PostCard'

const Posts = ({ posts }) => {
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
            <br></br>
            <section>
                <div className = 'container'>
                    {/*with the getStaticProps function, iterates over the retrieved results and then generates
                    the PostCard items with the retrieved data*/}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
                        {   
                            posts.map((post, i) => (
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
    const response = await client.getEntries({ content_type:'post' });//
    
    /*
    //console.log(response.items[0].fields.title);
    //console.log(typeof(response.items))
    const responseFilter = [];
    response.items.forEach(element => {
        //console.log(element.fields.title)
        if(element.fields.title.includes('Book')){
            responseFilter.push(element); 
        } 
    });
    console.log(responseFilter);
    */


    return{
        props: {
            posts: response.items, //response.items //responseFilter
            revalidate: 60
        }
    }
}//End of getStaticProps

export default Posts;
