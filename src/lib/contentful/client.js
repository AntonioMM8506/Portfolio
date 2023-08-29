import { createClient } from "contentful";

export const client = createClient({
    //When fetching from contentful, the keys need to be read as strings, between ""
    space: `${process.env.CONTENTFUL_SPACE_ID}`, 
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
});

export const previewClient = createClient({
    host: 'preview.contentful.com',
    space: `${process.env.CONTENTFUL_SPACE_ID}`, 
    accessToken: `${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
});
