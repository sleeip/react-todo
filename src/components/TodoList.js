import React from 'react'
import Todo from './Todo'

const TodoList = (list) => {

    const rendering = list.list.map((todo) => {
        return (
            <Todo idf={todo.id} text={todo.title} />
        )
    })
    return rendering
}

export default TodoList