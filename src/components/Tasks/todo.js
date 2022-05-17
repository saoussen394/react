import React,{ useState, useEffect } from 'react'
import axios from "axios";
import './todo.css'
function TodoTask(){
  const [tasks,setTasks]=useState([]);

  const loadTask = async () => {
    axios.get(`http://localhost:5000/api/v1/todo`).then((response) => {
        setTasks(response.data);
    });
};
useEffect(() => {
    loadTask();

}, []);
const selectTodo =async (e)=> {
const value = e.target.value;
await axios.get(`http://localhost:5000/api/v1/todo/${value}`)

}
  return(
    <div>
  <div id="center">
        <section id="todo-cmp">
            <header id="todo-cmpheader"><div className='todo3'/>
                <h2>To Do</h2>
                <p>List</p>
            </header>

                <ul id='todo-cmplist'>
                    <li id='litodo'>
          { tasks.map((task) => (
                        <label  key={task.id} id='labeltodo'>
<button
    id="add" value={task.id}
     onClick={(e) => {
        const confirmBox =
            window.confirm(
                "you want to  add this task ? :  " +
task.title);
        if (confirmBox === true) {
          selectTodo(e);
         }
       }}
                                            >
                                                add
                                            </button>
                             <span id="spantodo">{task.title}</span>
               <hr/>
               </label>
                    ))}
                    </li>

            </ul>
        </section>
  </div>
</div> 

  )
}
export default TodoTask