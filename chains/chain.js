const chainA = require('./chainA');

exports.getSubject = function(req,subjects){
    subjects=chainA.getSubject(req,subjects);
    return subjects;
}