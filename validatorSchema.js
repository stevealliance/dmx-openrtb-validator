const Joi = require('@hapi/joi')

const banner = Joi.object({
    w: Joi.number(),
    h: Joi.number(),
    format: Joi.array().items(Joi.object({w: Joi.number(), h :Joi.number()})),
    topframe: Joi.number().valid(0, 1)
}).unknown()

const native = Joi.object({
    request: Joi.string().required(),
    ver: Joi.string(),
    api: Joi.array().items(Joi.number().strict().valid(1,2,3,4,5,6)),
    battr: Joi.array().items(Joi.number().strict().valid(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)),
    ext: Joi.object().unknown()
})

const audio = Joi.object({
    minbitrate: Joi.number().strict(),
    maxbitrate: Joi.number().strict(),
    mimes: Joi.array().items(Joi.string()).required(),
    protocols: Joi.array().items(Joi.number().strict().valid(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).required(),
    startdelay: Joi.number().strict(),
    sequence: Joi.number().strict(),
    maxextended: Joi.number().strict(),
    battr: Joi.array().items(Joi.number().strict().valid(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)),
    maxextended: Joi.number().strict(),
    minduration: Joi.number().strict().required(),
    maxduration: Joi.number().strict().required(),
    delivery: Joi.array().items(Joi.number().strict().valid(1,2,3)),
    companionad: Joi.array().items(banner.unknown()),
    api: Joi.array().items(Joi.number().strict().valid(1, 2, 3, 4, 5,6)),
    companiontype: Joi.array().items(Joi.number().strict().valid(1,2,3)),
    ext: Joi.object().unknown(),
    maxseq: Joi.number().strict(),
    feed: Joi.number().strict().valid(1,2,3),
    stitched: Joi.number().strict().valid(0, 1),
    nvol: Joi.number().strict().valid(0,1,2,3,4)
}).unknown()

const video = Joi.object({
    skip: Joi.number().valid(0, 1).required(),
    mimes: Joi.array().items(Joi.string()).required(),
    linearity: Joi.number().strict().valid(1, 2).required(),
    minduration: Joi.number().required(),
    maxduration: Joi.number().required(),
    protocols: Joi.array().items(Joi.number().strict().valid(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).required(),
    w: Joi.number().required(),
    h: Joi.number().required(),
    startdelay: Joi.number().strict(),
    api: Joi.array().items(Joi.number().strict().valid(1, 2, 3, 4, 5,6)),
    playbackmethod: Joi.array().items(Joi.number().strict().valid(1,2,3,4,5,6)),
    placement: Joi.number().valid(1,2,3,4,5),
    skipmin: Joi.number(),
    skipafter: Joi.number(),
    sequence: Joi.number().strict(),
    maxextended: Joi.number(),
    ext: Joi.object().unknown(),
    minbitrate: Joi.number().strict(),
    maxbitrate: Joi.number().strict(),
    boxingallowed: Joi.number().strict().valid(0, 1),
    playbackend: Joi.number().strict().valid(1,2,3),
    delivery: Joi.array().items(Joi.number().strict().valid(1,2,3)),
    pos: Joi.number().valid(0,1,2,3,4,5,6,7),
    companionad: Joi.array().items(banner.unknown()),
    companiontype: Joi.array().items(Joi.number().strict().valid(1,2,3)),
    battr: Joi.array().items(Joi.number().valid(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))
})

const imp = Joi.object({
    id: Joi.string().required(),
    displaymanager: Joi.string(),
    displaymanagerver: Joi.string(),
    instl: Joi.number().valid(0, 1),
    bidfloor: Joi.number(),
    bidfloorcur: Joi.string(),
    iframebuster: Joi.array().items(Joi.string()),
    exp: Joi.number(),
    tagid: Joi.string().required(),
    secure: Joi.number().valid(0, 1)
}).pattern('banner', banner).pattern('video', video).pattern('audio', audio).pattern('native', native)

const publisher = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    cat: Joi.array().items(Joi.string()),
    domain: Joi.string().domain(),
    ext: Joi.object().unknown()
})

const site = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    page: Joi.string(),
    domain: Joi.string().domain(),
    ref: Joi.string(),
    cat: Joi.array().items(Joi.string()),
    sectioncat: Joi.array().items(Joi.string()),
    pagecat: Joi.array().items(Joi.string()),
    ver: Joi.string(),
    privacypolicy: Joi.number().strict().valid(0, 1),
    paid: Joi.number().strict().valid(0, 1),
    ext: Joi.object().unknown(),
    content: Joi.object().unknown(),
    mobile: Joi.number().strict().valid(0, 1),
    search: Joi.string()
}).pattern('publisher', publisher)

const app = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    bundle: Joi.string(),
    domain: Joi.string().domain(),
    storeurl: Joi.string(),
    cat: Joi.array().items(Joi.string()),
    sectioncat: Joi.array().items(Joi.string()),
    pagecat: Joi.array().items(Joi.string()),
    ver: Joi.string(),
    privacypolicy: Joi.number().strict().valid(0, 1),
    paid: Joi.number().strict().valid(0, 1),
    ext: Joi.object().unknown(),
    content: Joi.object().unknown(),
    keywords: Joi.string()
}).pattern('publisher', publisher)

const schema = Joi.object({
    ext: Joi.object({
        pchain: Joi.string(),
        ssl: Joi.number().valid(0, 1)
    }).unknown(),
    at: Joi.number().valid(1, 2, 3),
    id: Joi.string().min(10).required(),
    name: Joi.number(),
    imp: Joi.array().items(imp).required(),
    regs: Joi.object({
        coppa: Joi.number().valid(0, 1),
        ext: Joi.object({
            gdpr: Joi.number().valid(0, 1),
            "us_privacy": Joi.string()
        }).unknown()
    }).unknown(),
    user: Joi.object().required(),
    device: Joi.object({
        ua: Joi.string().required(),
        ip: Joi.string().ip({version: ['ipv4', 'ipv6']}),
        devicetype: Joi.number(),
        language: Joi.string(),
        geo: Joi.object({
            city: Joi.string(),
            country: Joi.string(),
            type: Joi.number()
        }).unknown()
    }).unknown(),
    cur: Joi.array().items(Joi.string()),
    tmax: Joi.number()
}).pattern('app', app).pattern('site', site).unknown()

module.exports = { schema }
