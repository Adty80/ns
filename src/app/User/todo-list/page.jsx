"use client"
import React, { useState } from 'react'

const Todolist = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [time, setTime] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc ,time}]);
    setDesc("");
    setTitle("");
    setTime("")
    console.log(mainTask);
  }

const deleteHandler=(i)=>{


  let copytask=[...mainTask]
  copytask.splice(i,1)
  setMainTask(copytask) 
}

  let Task = <div>No Available task</div>;

  if(mainTask.length>0){
    Task = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
        <div  className='flex justify-between w-2/3 mb-3'>
          <h5>{t.title}</h5>
          <h5>{t.desc}</h5>
          <h5>{t.time}</h5>
        </div>
          <button onClick={()=>{deleteHandler(i)}}  className='bg-red-400 mb-5 p-2' >Delete</button>
        </li>
      );
    });
  }

  return (
    <>    
      <div className='text-center text-3xl text-red-600'>todo-List</div>
      <form className='justify-center items-center flex grid sm:grid-cols-12' onSubmit={submitHandler}>
        <input 
          type="text" 
          className='m-8 px-4 py-2 border-4 border-black sm:col-span-4 col-span-12' 
          value={title} 
          placeholder='Enter Any Task'  
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          className='m-8 px-4 py-2 border-4 border-black sm:col-span-4 col-span-12' 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          placeholder='Enter Description'
        />
        <input 
           type="time"
          className='m-8 px-4 w-full py-2 border-4 border-black col-span-1 ' 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
       
        />
        <br />
        <button className='p-3 border-2 border-white-500 rounded-2xl sm:col-span-1 col-span-12 bg-black text-white'>Add Task</button>
        <br />
      </form>
        <div className='bg-slate-200 w-full p-2 col-span-12'>
          <ul>{Task}</ul>
        </div>
    </>
  )
}

export default Todolist
