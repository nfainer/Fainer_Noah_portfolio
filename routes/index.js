const express = require('express');
const router = express.Router();
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');

const sql = require('../utils/sql');

// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT * FROM tbl_home";

    sql.query(query, (err, result) => {
        // if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
       
        res.render('home');
    }) 
    
})

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})

router.get('/contact', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the contact route');

    res.render('contact');
})

router.get('/about', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the contact route');

    res.render('about');
})

router.get('/portfolio', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the contact route');

    res.render('portfolio');
})

router.get('/mograph', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the mograph route');

    res.render('mograph');
})

// router.get('/:id', (req, res) => {
//     console.log('hit a dynamic route!')
//     console.log(req.params.id);
//     // res.render('errorPage')

// let query = `SELECT * FROM tbl_bio WHERE profID="${req.params.id}"`;

// sql.query(query, (err, result) => {
//     if (err) { throw err; console.log(err); }

//     console.log(result); // should see objects wrapped in an array

//     // turn our social property into an array - its just text in the DB
//     // which isnt really anything we can work with
    
    
//     result[0].social = result[0].social.split(",").map(function(item) {
//     item = item.trim(); // remove the extra spaces from each word
//     return item;

//     });

//     // send the DB query back to the browser
//     res.json(result);
    
// })
    
// })

module.exports = router;