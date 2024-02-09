const express = require ('express');
const cors = require ('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

app.use(express.json());

app.use(cors());

app.post('/todo',async function(req, res){

    //input validation
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the incorrect inputs"
        })
        return
    }

    //Insert the data into MongoDb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully"
    })

});

app.get('/todos',async function(req, res){
    //get all the todos
    const todos = await todo.find({}) 
    res.json({
        todos
    })
});

app.put('/completed',async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the incorrect inputs"
        })
    }
    // update the completed todos
    await todo.update({
        _id: req.body.id
    },{
      completed: true  
    })
    res.json({
        msg: "Todo is completed"
    })
});
app.listen(3000);