const english = require('./english');
exports.getSubject = function(req,subjects){
    if(req.bangla>=12){
        subjects.push("Bangla");
    }
    subjects=english.getSubject(req,subjects);
    return subjects;
}