import PostBody from '@/components/posts/PostBody';
import PostHeader from '@/components/posts/PostHeader'; 
import PreviewAlert from '@/components/ui/PreviewAlert';
import Skeleton from '@/components/ui/Skeleton';
import { client, previewClient } from '@/lib/contentful/client'
import { useRouter } from 'next/router';


//The name [slug].jsx, its because its a dynamic name, so this element will have a name according 
//to the the callback when used. 

const Posts = ({ post, preview }) => {
    const router = useRouter();
    
    return (
        <section className='section'>
            {/*If we are using the preview mode, then we call the PrevieAlert component*/}
            { preview && <PreviewAlert/>}
            <div className='container'>
                <article className='prose mx-auto'>
                    {/*Because we are using fallback, in the given case that there's no element that matches
                    with the query for the post elements, the Skeleton element will be dislayed, otherwise 
                    the PostHeader and PostBody will be rendered.*/}
                    {router.isFallback ? ( <Skeleton/> ) : 
                    (
                        <>
                            <PostHeader post={post}/>
                            <PostBody post={post}/>
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}//End of index


export const getStaticProps = async ({params, preview=false}) => {
    const cfClient = preview ? previewClient : client; //only for Preview display, in the given case
    //that the function receives a preview parameter as true, then it will use the data for the preview
    //otherwise it will use the data for the productive content. 

    const { slug } = params;
    const response = await cfClient.getEntries({
        content_type: 'post',
        'fields.slug': slug //named parameter, this fetch the value of slug from contentul and assign it to the slug constant
    });

    if(!response?.items?.length){
        return {
            redirect: {
                destination: '/posts',
                permanent: false
            }
        }
    }

    return{
        props: {
            post: response?.items?.[0],
            preview,
            revalidate: 60
        }
    }

}//End of getStaticProps


export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'post'});
    const paths = response.items.map( item => ({
        params: { slug: item.fields.slug }
    }));

    return {
        paths,
        fallback: true 
        //fallback, in the given case that the user tries to access to an unexistant page
        //when saying that we have a fallback true, it means that the generated route will 
        //be generated on demand and will show a determined component. However, if we 
        //indicate a false, then, instead of generating that path, it will not generate anything
        //at all, like a missing page. 
    }

}//End of getStaticPaths


export default Posts;