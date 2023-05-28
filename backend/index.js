const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const componentRouter = require('./routers/componentRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');

app.use(cors({
   origin : ['http://localhost:3000'],
}));

app.use(express.json());

// middleware
app.use('/user', userRouter);
app.use('/component', componentRouter)
app.use('/util', utilRouter)

app.use(express.static('./static/uploads'));

app.get('/' , (req, res) => { 
    res.send('working perfectly');
} );

app.get('/add' , (req,res) => {
    res.send('response from add');
});

app.get('/getAll' , (req,res) => {
    res.send('response from getAll');
});

app.get('/update' , (req,res) => {
    res.send('updated');
});

app.listen( port, () => { console.log('server started');} );

