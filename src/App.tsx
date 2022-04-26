import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]
const tasks2 = [
    { id: 1, title: "HELLO MAZAFAKA", isDone: true },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false }

]

function App() {
    return (
        <div className="App">
           <Todolist title={"What to learn 111"} task={tasks1} />
            <Todolist title={"What to learn 222"} task={tasks2}/>
        </div>
    );
}

export default App;
