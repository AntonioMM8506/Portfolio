import RichText from '../RichText';

const PostBody = ({ post }) => {
    const { content } = post.fields;

    return (
        <div className='mx-auto prose'>
            <RichText content={content}/>
        </div>
    )
}//End of PostBody

export default PostBody;
