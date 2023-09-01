import ContentfulImage from "./ContentfulImage";

//Retrieves the picture from the contentful service in order to generate a rounded
//picture so it can suits with the card content
const Avatar = ({name, picture}) => {
    return(
        <div className='flex items-center'>
            <div className='relative w-10 h-10 mr-4'>
                <ContentfulImage
                    src={picture.fields.file.url}
                    layout='fill'
                    className='rounded-full m-0'
                    alt={name}
                />
            </div>
            <div className='font-semibold'>{name}</div>
        </div>
    )
}//End of Avatar

export default Avatar;
