const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://psvincent:Pv2173228557@cluster0.ss6bj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...')) .catch(err => console.log(err));



module.exports = mongoose.connection;
