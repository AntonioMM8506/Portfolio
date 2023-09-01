import Image from 'next/image';

//Used to pass parameters to the Image component
const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = props => {
    return <Image loader={contentfulLoader} {...props}/>
}

export default ContentfulImage;
