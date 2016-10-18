var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fast and Furious' });
});


router.get("/about", function(req, res, next) {
	var self = {
		name: "Traci",
		phone: "867-5309",
		email: "traci@gmail.com"
	};
	/*response.render()*/
	//1st: template(view)
	//2nd: an Object with data
	res.render("about", self);
});

router.get("/faq", function(req, res, next) {
	var questions = {
		questions: ["I can haz cookie?", "What day is it?", "How is the weather?"],
		answers: ["yassss", "Tuesday", "It's hot!"]
	};

res.render("faq", questions);
});


router.get("/login", function(req, res, next) {
	var user = {
		//name: "traci",
		password: "party",
		hint: "strovia"
	};
res.render("login", user);	
});


module.exports = router;
