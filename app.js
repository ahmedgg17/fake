const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({extended: true}));
const Mydata = require('./models/myData')

app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile('./api/index.html', {root: __dirname})
})

mongoose.connect('mongodb+srv://moonlight:moo4light432@cluster0.bykl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    //علشان يتاكد ان قعدت البيانات اتوصلت 
    app.listen(port,()=>{
    console.log(`start on port:${port}`);
})
})
.catch((err)=>{
    //علشان اظهر الخطا لو حصل
    console.log(err);
});

app.post('/',(req,res)=>{
    //علشان تعمل داتا جديده
    const data = new Mydata(req.body)
    data.save()
        //علشان تودي الشخص علي مكان بعد ما يتم تسجيل الدخول
    res.redirect('')
})