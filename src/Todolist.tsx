import React, {useState} from "react";

type TodolistPropsType = {
    title: string
    name?: number
    tasks: Array<TaskType>
    removeTask:(id:number)=>void
    changeFilter:(Filtered:string)=>void

}
type TaskType = {
    id: number
    title: string
    isDone: boolean

}
export const Todolist = (props: TodolistPropsType) => {
    const [filterForColander,setFilterForColander]=useState<"all"| "active" | "Complete"> ("All")
    const changeFilter=(FilterValue:string)=>{
        setFilterForColander(FilterValue)
    }
    let colander=tasks
    if (filterForColander === "active"){
        colander=tasks.filter(el=>!el.isDone)
    }
    if (filterForColander === "Complete") {
        colander = tasks.filter(el => !el.isDone)
    }







    return (
        <div>
            <h3>{props.title}</h3>
            <>{props.name}</>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (

                        <li key={el.id}>
                            <button onClick={()=>props.removeTask(el.id)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>changeFilter("ALL")}>All</button>
                <button onClick={()=>changeFilter("Active")}>Active</button>
                <button onClick={()=>changeFilter("Completed")}>Completed</button>
            </div>
        </div>

    )
}