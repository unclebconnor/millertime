 var express = require('express');
var mongoose = require("mongoose");
var Job = require("../models/job");
var User = require("../models/user");
var router = express.Router();

//DON'T DELETE...SEED DATA
router.get('/', function(req, res, next) {
//   User.create({
//     name: "Beavis",
//     email: "thegreatcornholio@teepee.bm",
//     brandingStatement: "Hey, Butt-head, this website kicks ass.",
//     unicornJob: "Whoa, unicorns are cool.  Heh heh."
//   }, function(err, job) {
//     Job.create({
//         title: "Junior Dev",
//         companyName: "Google",
//         skills: "HTML, CSS, JS, React, hipster vibes",
//         rating: "Unicorn",
//         statusString: "applied",
//     }, {
//         title: "Junior Dev",
//         companyName: "FaceBooks",
//         skills: "HTML, CSS, JS, React, hipster vibes",
//         rating: "Unicorn",
//         statusString: "applied",
//     }, function(err,job){
//         if (err) return console.log(err);
//         res.send(job);
//     })
  });

//CREATE A NEW JOB.  USED BY NEW JOB BUTTON
router.get('/addjob', function(req, res, next){
  Job.create({
    title:"New Job",
    companyName: "New Company"
  },function(err,job){
    if(err) return console.log(err);
    res.send(job);
  })
})

//GET LIST OF JOBS
router.get('/joblist',function(req,res,next){
  Job.find({}, function(err,jobs){
    if(err) return console.log(err);
    res.send(jobs);
  })

router.post("/jobList", function(req, res, rext){
  console.log("hitting route")

})


})


  // Job.find({}, function(err, jobs) {
  //   if (err) return console.log(err);
  //   res.send(jobs);
  // })
// });
module.exports = router;
