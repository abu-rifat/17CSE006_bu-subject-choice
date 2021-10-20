const chemistry = require('./chemistry');

exports.getSubject = function(req,subjects){
    if(req.math>=6){
        subjects.push("Math");
        subjects.push("Computer Science & Engineering");
        subjects.push("Costal Studies & Desester Management");
    }
    subjects=chemistry.getSubject(req,subjects);
    return subjects;
}