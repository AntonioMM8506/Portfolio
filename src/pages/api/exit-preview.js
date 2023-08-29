const handler = async(_, res) => {
    //clears the preview data sent from the handler function in preview, after clearing
    //the data returns the user to the home page
    res.clearPreviewData();
    res.writeHead(307, {location: '/'});
    res.end();
}

export default handler;