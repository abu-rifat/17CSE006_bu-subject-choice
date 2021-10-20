const chainEnd = require('./chainEnd');
const endC = require('../subjects/endC');

exports.getSubject = function(req,subjects){
    if(req.unit==='B'){
        subjects=endC.getSubject(req,subjects);
    }else{
        subjects=chainEnd.getSubject(req,subjects);
    }
    return subjects;
}