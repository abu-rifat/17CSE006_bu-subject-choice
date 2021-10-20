const chain = require('./chains/chain');

exports.getSubList = function(req,res,next){
    var subjects= [];
    subjects=chain.getSubject(req,subjects);
    return subjects;
}