import React from "react";
import PropTypes from 'prop-types';

const Todos = (props) => {
    const [shouldLineThrought, changeLine] = React.useState(true)

    const description = <span style={shouldLineThrought ? { textDecoration: 'none' } : { textDecoration: 'line-through' }}>{props.description} | {props.deadline}</span>

    const checkbox = <input type='checkbox' onChange={() => changeLine(!shouldLineThrought)} />
    const deleteButton = <button onClick={props.deleteTodo}>Delete</button>
    const editButton = <button onClick={props.editTodo}>{props.mode}</button>

    return <div>
        <li style={{ border : 'solid', padding: '5px', margin:'10px'}}>
            {description}
            {checkbox}
            {deleteButton}
            {editButton}
        </li>
    </div>
}

Todos.PropTypes = {
    description: PropTypes.string,
    deadline : PropTypes.instanceOf(Date)
}

export default Todos