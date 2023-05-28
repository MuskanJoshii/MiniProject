const mongoose = require('mongoose');

const url = ('mongodb+srv://MuskanJoshii:Jungkook97@cluster0.dn9hlcb.mongodb.net/mydatabase?retryWrites=true&w=majority');

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
