
let deepClone=(v)=>{
    return JSON.parse(JSON.stringify(v));
};
let judgeDay = (a,b) =>{
    var abox = a[0].split("-");
    var abox1 = a[1].split("-");
    var bbox = b.split("-");
    for(var i = 0 ; i < 3 ;i++ ){
        if(parseInt(abox[i]) <= parseInt(bbox[i]) && parseInt(abox1[i]) >= parseInt(bbox[i])){
            if(parseInt(abox[i])===parseInt(bbox[i])&&parseInt(abox1[i])===parseInt(bbox[i])){
            }
            else{
                return true;
            }
        }
        else{
            return false;
        }

    }
    return true;
};
// exports.deepClone = deepClone;
// exports.judgeDay = judgeDay;

export {
    deepClone,
    judgeDay
}