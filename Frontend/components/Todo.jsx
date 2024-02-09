/*  todo is an array of objects
    Todos = [{
        title: Go to gym,
        descriptions:

    }]
*/
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ?"Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}