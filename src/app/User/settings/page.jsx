"use client"
import React from 'react'
import { useState } from 'react'

const user = () => {
 
  const [task,setTask]=useState("");
  const [maintask,setMainTask]=useState([]);
  const submitHandler =(e)=>{

e.preventDefault()
console.log(task)
setMainTask([...maintask,{task}])
setTask("")

  }


const deleteHandler =(i)=>{


  let copytask =[...maintask]
  copytask.splice(i,1)
  setMainTask(copytask)

}





let result = <h3>No Available task</h3>

if(maintask.length>0){

  result = maintask.map((t,i)=>{
return ( 

<li key={i} className='justify-around items-center flex mb-3 border-red-100'> 
<h5>{t.task}</h5>
<button  onClick={()=>{
deleteHandler(i)}
} className='bg-black text-white p-3 '>Delete</button>
</li>

)



  })
  




}


  return (

    <> 
    <form  onSubmit={submitHandler}>
    <div className='justify-center items-center flex'>
       <input type="text" name="text" value={task} onChange={(e)=>(
      setTask(e.target.value)  
       )} className='p-2 my-5 bg-slate-200  '  placeholder='add a task' />   
       </div>
       <button className='bg-purple-600 text-white p-2 w-28 rounded mx-auto block '>Add</button>
       </form>
<br />
<div className='bg-purple-400 p-3'>
  <ul>
{result}
  </ul>
</div>

  </>

  )
}

export default user

