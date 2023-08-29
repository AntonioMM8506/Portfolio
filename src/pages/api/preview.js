import { previewClient } from '@/lib/contentful/client';

const handler = async(req, res) => {
  const { secret, slug } = req.query; //geting the secret and the slug from the request

  //If the slug does not exist, then a 401 error is sent.
  if(!slug){
    return res.status(401).json({message: "Invalid Token"});
  }

  //using the corresponding contentful client, fetches the data from the post content and the 
  //corresponding slug
  const response = await previewClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  });

  const post = response?.items?.[0];

  //If there's no slug at atll, not a single post, then another error message will be received
  if(!post){
    return res.status(401).json({ message: "Invalid Slug" });
  }

  //Similar to a cookie, it uses the [slug] content, in order to modify the function so it can show
  //the corresponding data
  res.setPreviewData({});
  const url = `/posts/${post.fields.slug}`;
  res.writeHead(307, {location: url});
  res.end();

}//End of handler

export default handler;
