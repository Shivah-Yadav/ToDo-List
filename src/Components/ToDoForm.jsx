import React from 'react'

function ToDoForm() {
    const [list,setList] = React.useState([])
    const newTask = React.useRef("")

    function addTask(){
        setList([...list, newTask.current.value])
        newTask.current.value = ""
        // setNewTask("")
    }
    const updateTask = (e,i)=>{
        const upTask = [...list]
        upTask.splice(i,1,e.target.value)
        setList(upTask)
    }
    function deleteTask(i,e){
        const delList = [...list]
        delList.splice(i,1)
        setList(delList)
    }
  return (
    <div className="form">
        <div className="inputs">
        <input type="text"  ref={newTask} placeholder="Enter a Task"></input>
        <button className="btn" onClick={addTask}>Add Task</button>
        </div>
        <div className="container">
            {
                list.map((val,i)=>{
                    return (
                        <div className="list" key={i}>
                            <input key={i} type="text" value={val} onChange={(e,i)=>updateTask(e)}/>
                            <span className="icon" onClick={deleteTask}>✖</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ToDoForm
