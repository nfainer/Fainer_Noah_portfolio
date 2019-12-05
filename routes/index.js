const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT * FROM tbl_mograph";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
       
        
    }) 
    res.render('home' ,  { item: result });
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

router.get('/portfolio/mograph', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the contact route');

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