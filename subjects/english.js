const endB = require('./endB');
exports.getSubject = function(req,subjects){
    if(req.english>=14){
        subjects.push("English");
    }
    subjects=endB.getSubject(req,subjects);
    return subjects;
}