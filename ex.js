const express = require('express');
const app = express();

app.use(express.json());

// HTTP POST Requests //

app.post('api/courses', (req,res) => {
    if(req.body.name.length>=3){
    const course ={
        id: course.length +1,
        name: req.body.name,
    }
    courses.push(course);
    return courses;
}

});


app.get('/',(req,res)=>{
    res.send('Hello there');
});

const courses = [
{id:1, name:'Web Development'},
{id:2, name:'IT'},
{id:3, name:'Cybersecurity'},

];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
    res.send(course);
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000 ....')
})