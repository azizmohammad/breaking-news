const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

// app.use(cors())


const allCourses = require('./data/courses.js');

app.get('/', (req, res) => {
    res.send('news api running')
})

// allCourses data
app.get('/allCourses', (req, res) => {
    res.json(allCourses)
})


// all courses id 
app.get('./course/:id', (req, res) => {
    const id = req.params.id;
    const getSingleItem = allCourses?.find(c => c.id == id)
    if (!getSingleItem) {
        res.send('Single id not Found')
    }
    res.send(getSingleCourses)
})


app.listen(port, () => {
    console.log('programming education sarver running', port)
})




// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "index.js",
//             "use": "@now/node"
//         }
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest": "index.js"
//         }
//     ]
// }