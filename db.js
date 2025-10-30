const mongoose = require('mongoose');

// users
// * our site requires authentication...
// * so users have a username and password
// * users can be either teachers or supervisors
// * teachers can have 0 or more lesson plans
const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  role: { type: String, enum: ['teacher', 'supervisor'], required: true },
  lessonPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LessonPlan' }]
});

// a lesson plan
// * each lesson plan belongs to one teacher (user)
// * stores information about what will be taught
// * includes teaching details, standards, and supervisor feedback
const LessonPlan = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  teacherName: { type: String, required: true },
  title: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  period: { type: String, required: true },
  dateTeaching: { type: Date, required: true },
  learningObjective: { type: String, required: true },
  learningStandard: { type: String, required: true },
  introduction: { type: String, required: true },
  activities: { type: String, required: true },
  closing: { type: String, required: true },
  notes: { type: String, default: "" }, // supervisor feedback or comments
  approved: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'declined'], 
    default: 'pending' 
  },
  createdAt: { type: Date, required: true, default: Date.now }
});

// TODO: add remainder of setup for slugs, connection, registering models, etc. below
