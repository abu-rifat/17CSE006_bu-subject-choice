exports.getSubject = function(req,subjects){
    subjects.push("Marketing");
    subjects.push("Management Studies");
    subjects.push("Accounting & Information System");
    subjects.push("Finance & Banking");
    return subjects;
}