const express = require('express')
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const studentRouter = require('./routers/studentsRouter');

dotenv.config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

dbConnect();

app.use('/students',studentRouter);


app.listen(process.env.PORT,()=>{
    console.log('server is running');
})