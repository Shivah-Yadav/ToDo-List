import React from 'react'
import './App.css'

function ToDo() {
    const data = localStorage.getItem('lists')
    ? JSON.parse(localStorage.getItem('lists')) : []

    const [list,setList] = React.useState(data)
    const newTask = React.useRef("")

    const [search, setSearch] = React.useState('')

    function addTask(e,i){
        localStorage.setItem('lists',JSON.stringify([...list, newTask.current.value]))
        setList([...list, newTask.current.value])
        newTask.current.value = ""
    }
    function keyEnter(e){
      if(e.key === 'Enter'){
        addTask()
      }
    }
    const updateTask = (e,i)=>{
        const upTask = [...list]
        upTask.splice(i,1,e.target.value)
        setList(upTask)
        localStorage.setItem('lists',JSON.stringify(upTask))

    }
    function deleteTask(i){
        const delList = [...list]
        delList.splice(i,1)
        setList(delList)
        localStorage.setItem('lists',JSON.stringify(delList))
    }
  return (
    <>
        <div className="search">
            <input type="text" id="search" placeholder="Search task" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>

        <div className="App">
        <div className='header'>
            <h2 className="heading">To DO List✨</h2>
            <div className="inputs">
            <input type="text" ref={newTask} placeholder="Enter a Task" onKeyDown={keyEnter}></input>
            <button className="btn"  onClick={addTask}>Add Task</button>
        </div>
        </div>
            <div className="container">
                {
                    list.map((val,i)=>{
                    if(val.toLowerCase().includes(search.toLowerCase())){
                        return (
                            <div className="list-container">
                                <div className="list" id='list' key={i}>
                                <input type="text" id="task" value={val} onChange={(e)=>updateTask(e,i)}/>
                                <span className="icon" key={i} onClick={()=>{deleteTask(i)}}>❌</span>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    </>
  )
}

export default ToDo
