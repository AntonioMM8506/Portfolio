
const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 60}`
}

export default imageLoader;