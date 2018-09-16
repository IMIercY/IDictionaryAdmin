var express = require('express');
var router = express.Router();

var firebase = require("./firebase");
// var config = {
//     apiKey: "AIzaSyADNXZWtKs9rjm_81k-xKWJxC3F_A5Dgo8",
//     authDomain: "idictionary-3e488.firebaseapp.com",
//     databaseURL: "https://idictionary-3e488.firebaseio.com",
//     projectId: "idictionary-3e488",
//     storageBucket: "idictionary-3e488.appspot.com",
//     messagingSenderId: "320161526092"
//   };
//   firebase.initializeApp(config);

/* GET home page. */
router.get('/', function(req, res, next) {
	firebase.collection("words").orderBy('titleFire').get().then((snapshot) => {
		var words = []
		snapshot.forEach((word)=>{
			words.push(word.data())
		})
		res.render('index', { 
			title: 'Express',
			words : words
		 });   
	});
  // res.render('index', { title: 'Express' });
});

router.get('/sakagamer', function(req, res){
	res.render('index', {title: 'Excellency Saka'});
});

router.get('/admin', function(req, res){
	res.render('admin', {body: 'Excellency'});
});

module.exports = router;
