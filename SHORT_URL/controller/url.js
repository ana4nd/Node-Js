import { nanoid } from "nanoid";
import Url from "../models/url.js";

export async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({
        msg: "url is required"
    })
    const shortID = nanoid(8);

    await Url.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })

    return res.render("home", {
        id: shortID,
    })
}

export async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId
    },{$push: {
        visitHistory:{
            timestamp: Date.now(),
        }
    }})

    res.redirect(entry.redirectURL);
}
export async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await Url.findOne({shortId});

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}