const biology = require('./biology');

exports.getSubject = function(req,subjects){
    if(req.physics>=6){
        subjects.push("Physics");
        subjects.push("Geology & Mining");
        if(subjects.indexOf("Computer Science & Engineering")===-1){
            subjects.push("Computer Science & Engineering");
        }
        if(subjects.indexOf("Costal Studies & Desester Management")===-1){
            subjects.push("Costal Studies & Desester Management");
        }
    }
    subjects=biology.getSubject(req,subjects);
    return subjects;
}