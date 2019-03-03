
let deepClone=(v)=>{
    return JSON.parse(JSON.stringify(v));
};

exports.deepClone = deepClone;