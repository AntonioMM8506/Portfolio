import { createClient } from "contentful";


const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
});

const getBlogPosts = async () => {
    const response = await client.getEntries({ content_type: "post"});
    return  response.items
};


const getAuthor = async () => {
    const response = await client.getEntries({ content_type: "author" })
    return response.items;
}


export {getBlogPosts, getAuthor};