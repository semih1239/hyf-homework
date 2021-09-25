import React from "react";
import Todos from "./TodosProps";

const Todolist = () => {
    const [todoItems, setTodoItems] = React.useState([])
    const [inputText, changeText] = React.useState('')
    const [date, changeDate] = React.useState()
    const [editMode, changeEditMode] = React.useState(true)

    React.useEffect(() => {
        fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
            .then((res) => res.json())
            .then((data) => setTodoItems(data))
    }, [])

    function deleteTodo(id) {
        setTodoItems(todoItems.filter(todo => todo.id !== id))
    }

    const addTodo = () => {
        const key = todoItems.length - 1 !== -1 ? todoItems[todoItems.length - 1].id + 1 : 1
        if (!inputText || !date) { return alert('Please enter the description and deadline correctly') }
        return setTodoItems((todo) => todo.concat({ id: key, description: inputText, deadline: date }))
    }

    const noItemText = todoItems.length !== 0 ? '' : "No Items"

    return <div>
        <div>
            Todo Description <input type="text" onChange={(e) => changeText(e.target.value)} />
        </div>
        <div>
            Deadline <input type="date" onChange={(e) => {
                if (new Date().getTime() < new Date(e.target.value).getTime()) {
                    changeDate(e.target.value)
                }
                else {
                    alert("You can't change the past")
                    changeDate()
                }
            }} />
        </div>
        <div>
            <button onClick={addTodo}>Add Todo</button> <span>{noItemText}</span>
        </div>
        <div>
            {todoItems.map(todo => {
                return <Todos key={todo.id}
                    description={!todo.mode ? todo.description : <input type="text"
                        defaultValue={todo.description}
                        onChange={(e) => { e.target.value ? todo.description = e.target.value : todo.description = "Do Nothing" }} />}
                    deadline={todo.deadline}
                    deleteTodo={() => deleteTodo(todo.id)}
                    editTodo={() => {
                        changeEditMode(!editMode)
                        return todo.mode = !todo.mode
                    }} mode={todo.mode ? 'Update' : 'Edit'} />
            }
            )}
        </div>
    </div>
}

export default Todolist;