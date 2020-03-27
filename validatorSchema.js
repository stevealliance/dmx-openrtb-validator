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


const schema = Joi.object({
    ext: Joi.object({
        pchain: Joi.string(),
        ssl: Joi.number().valid(0, 1)
    }).unknown(),
    at: Joi.number().valid(1, 2, 3),
    id: Joi.string().min(10).required(),
    name: Joi.number(),
    site: Joi.object({
        domain: Joi.string().domain().required(),
        page: Joi.string().required(),
        publisher: Joi.object({
            id: Joi.string().required()
        }).required().unknown()
    }).required().unknown(),
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
}).unknown()

module.exports = { schema }
