const mongoose = require('mongoose')
const Schema  =mongoose.Schema

const artic = new Schema({
    numberOrEmail: String,
    password: String,
})
const Mydata = mongoose.model('Mydata', artic)


module.exports = Mydata
//علشان انقل البيانات لل ملف الرايسي