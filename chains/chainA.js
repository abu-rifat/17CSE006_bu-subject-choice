const chainB = require('./chainB');
const math = require('../subjects/math');

exports.getSubject = function(req,subjects){
    if(req.unit==='A'){
        subjects=math.getSubject(req,subjects);
    }else{
        subjects=chainB.getSubject(req,subjects);
    }
    return subjects;
}