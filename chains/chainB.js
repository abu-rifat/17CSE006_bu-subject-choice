const chainC = require('./chainC');
const bangla = require('../subjects/bangla');

exports.getSubject = function(req,subjects){
    if(req.unit==='B'){
        subjects=bangla.getSubject(req,subjects);
    }else{
        subjects=chainC.getSubject(req,subjects);
    }
    return subjects;
}