const express = require ('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());

app.post('/todo',function(req, res){

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


});

app.get('/todos',function(req, res){

});

app.put('/completed',function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the incorrect inputs"
        })
    }
});