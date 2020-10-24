const mongoose = require('mongoose');
mongoose.promise = global.promise

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://127.0.0.1:27017/authenticate', {

}).then(() => {
    console.log('connected to Database')
}).catch((err) => {
    console.log(err)
})
const secret="amazon";
module.exports.secret = secret
module.exports = mongoose;
