exports.getSubject = function(req,subjects){
    subjects.push("Philosophy");
    subjects.push("Journalism");
    subjects.push("History");
    subjects.push("Economics");
    subjects.push("Sociology");
    subjects.push("Public Administration");
    subjects.push("Political Science");
    subjects.push("Law");
    return subjects;
}