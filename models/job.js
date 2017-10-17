var mongoose = require("mongoose");

var jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    skills: String,
    rating: String,
    statusString: String,
    statusArray: {
        type: String,
        allowedValues: [
            'applied',
            'interviewing',
            'offer made',
            'offer accepted',
            'offer rejected'
        ]
    },
    meta: {
        contactPerson: String,
        contactEmail: String,
        thankYouSent: Boolean,
        firstFollowUp: String,
        firstFollowUp: Date,
        secondFollowUp: String,
        secondFollowUp: Date,
        thirdFollowUp: String,
        thirdFollowUp: Date,
        notes: String
    }
});

var Job = mongoose.model("Job", jobSchema);

module.exports = Job;