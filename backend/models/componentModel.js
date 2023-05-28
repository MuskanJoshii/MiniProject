const { Schema, model, Types} = require('../connection');

const myschema = new Schema({
    title: String,
    description: String,
    user: {type : Types.ObjectId, ref: 'user'},
    image: String,
    code : String,
    createdAt: Date
});

module.exports = model('component',myschema);
