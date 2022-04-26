import React from "react";

type TodolistPropsType = {
    title: string
    name?: number
    task: Array<TaskType>

}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <>{props.name}</>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}