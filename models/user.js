var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  brandingStatement: {type: String, required: true},
  unicornJob: {type: String, required: true},
  meta: {
    resumeString: String,
    resumeBoolean: Boolean,
    linkedinString: String,
    linkedinBoolean: Boolean,
    portfolioString: String,
    portfolioBoolean: Boolean,
    gaSiteString: String,
    gaSiteBoolean: Boolean,
    bioString: String,
    bioBoolean: Boolean,
  }
});

var User = mongoose.model("User", userSchema);

module.exports = User;
