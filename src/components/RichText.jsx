import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types';
import Link from 'next/link';
import ContentfulImage from "./ui/ContentfulImage";

const options = {
    renderMark: {
        [MARKS.CODE]: text => {
            return(
                <pre>
                    <code>{text}</code>
                </pre>
            )
        }
        //[MARKS.BOLD]: text => <span className='font-bold'>{text}</span>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            if(node.content.find(item => item.marks?.find(mark => mark.type === "code"))){
                return(
                    <div className="text-justify">
                        <pre>
                            <code>
                                {children}
                            </code>
                        </pre>
                    </div>
                )
            }

            return <p>{ children }</p>
        },
        [INLINES.ENTRY_HYPERLINK]: node => {
            if(node.data.target.sys.contentType.sys.id === 'post'){
                return(
                    <Link href={`/posts/${node.data.target.fields.slug}`}> { node.data.target.fields.title } </Link>
                )
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: node => {
            if(node.data.target.sys.contentType.sys.id === 'videoEmbed'){
                return(
                    <iframe
                        height='400'
                        width='100%'
                        src={node.data.target.fields.embedUrl}
                        title={node.data.target.fields.title}
                        allowFullScreen={true}
                    />
                )
            }
        },
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return(
                <ContentfulImage
                    src={node.data.target.fields.file.url}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.title}
                    className='h-20 w-20'
                />
            )
        }
    }

};

const RichText = ({ content }) => {
    //documentToReactComponents, iterates over the whole array of elements found, and returns all the elements so
    //it can be read, but it does not guarantee that an element can be displayed as desired, for example
    //a link into a RichText, it can be displayed just as common text, and not as an hyperlink. With the options
    //parameter we can define certain styles overwriting the default ones. 
    return <>{ documentToReactComponents(content, options)}</>

}//End of RichText

export default RichText;
