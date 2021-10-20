const physics = require('./physics');

exports.getSubject = function(req,subjects){
    if(req.chemistry>=6){
        subjects.push("Chemistry");
        subjects.push("Soil & Environmental Science");
    }
    subjects=physics.getSubject(req,subjects);
    return subjects;
}