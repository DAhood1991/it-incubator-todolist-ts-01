import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {



    let [tasks,setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},//el
        {id: 2, title: "JS", isDone: true},//el
        {id: 3, title: "JS", isDone: true},//el
        {id: 4, title: "ReactJS", isDone: false}//el
    ])


      

    const removeTask = (removeID: number) => {
        setTasks(tasks.filter((el) => el.id !== removeID))
        console.log(tasks)
    }

    /*const [filterForColander,setFilterForColander]=useState<"all"| "active" | "Complete"> ("All")
    const changeFilter=(FilterValue:string)=>{
        setFilterForColander(FilterValue)
    }
   let colander=tasks
        if (filterForColander === "active"){
            colander=tasks.filter(el=>!el.isDone)
        }
    if (filterForColander === "Complete") {
        colander = tasks.filter(el => !el.isDone)
    }*/
    // let colander =tasks.filter((e)=>!e.isDone)




    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
