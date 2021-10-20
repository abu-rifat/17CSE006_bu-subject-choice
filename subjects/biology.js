const endA = require('./endA');

exports.getSubject = function(req,subjects){
    if(req.biology>=6){
        subjects.push("Zoology");
        subjects.push("Biochemistry & Biotechnology");
    }
    subjects=endA.getSubject(req,subjects);
    return subjects;
}