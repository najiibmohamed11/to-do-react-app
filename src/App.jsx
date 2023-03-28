import { useState } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';
import './App.css'

function App() {
  const[task,SetTask]=useState([])
  const[deleteidx,setDelteidx]=useState()
  const [isChecked, setIsChecked] = useState([false]);
  console.log(isChecked)

  function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    SetTask((items)=>
     [...items,form.get("task")]
   )
   e.currentTarget.reset()

  }
  function dletitem(index) {
    const newTask = [...task];
    newTask.splice(index, 1);
    SetTask(newTask);
  }
  const handleCheckboxChange = (index) => {
    
    const newTask = [...isChecked];
    newTask[index]=!newTask[index]
    setIsChecked(newTask);
  };
  function handleClear(){
    if (window.confirm('Are you sure you want to delete all?')) {
      // The user clicked "Yes"
      // Perform the action here
      SetTask([])
    } else {
      // The user clicked "No" or closed the alert box
      // Do nothing or handle the cancelation here
    }

    
  }

 
  return (
    <div className="App">
      <div className="container">
      <h2>todo app</h2>

        <div className="header">
          <form onSubmit={handleSubmit}>
            <input
         
              type="text"
              name='task'
                          
            />
            <button tybe='submit' >+</button>
          </form >
        </div>
        {
          task==""&&
          <div className='emty'>
            <h2>👋let start th work</h2>
            </div>
        }
       {
        task.map((item,index)=>{
          return(
            <div className="oneTask">
              <div className="left">
              <input type="checkbox" 
                 checked={isChecked[index]}
                 onChange={()=>handleCheckboxChange(index)}
              
              className='checkBox' />

              </div>
              <div  className={`center ${isChecked[index] ? 'taskChecked' : ''}`}>
                {item}
              </div>
              <div className="right">
              <h3><AiTwotoneDelete onClick={() => dletitem(index)}/></h3>

              </div>
            </div>



          
          )
        })
       }
       {
        task!=""&& <div className="conter">
          <p>you have {task.length} tasks</p>
        </div>
       }

       {task !="" &&<div className="clear">
        <button onClick={handleClear}>clear</button>
       </div>}
      </div>

     
    </div>
  )
}

export default App
