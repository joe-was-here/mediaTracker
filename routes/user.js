
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.create = function(req, res) {
    console.log(req.query);
    res.send('logged');
};