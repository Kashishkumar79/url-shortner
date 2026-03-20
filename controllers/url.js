const shortid = require('shortid');
const Url = require('../models/url');


async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    const shortId=shortid();
    if(!req.body) return res.status(400).json({message:"url is required"});
    await Url.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[],
    })

    return res.json({ id:shortId});
}

 async function handleGetAnalytics(req, res) {
   const shortid=req.params.shortId;
   const reuslt =await Url.findOne({shortId:shortid})
   res.json({totalClicks:result.visitHistory.length,
             analytics:result.visitHistory
           })
}


module.exports={handleGenerateNewShortUrl,handleGetAnalytics};