import React from 'react';
import { useState } from 'react';

const TodoComponent = (props) => {

  const [name, setName] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const addTaskHandler = (e) => {
    if (name !== "") {
      setName("");
      setAllTasks((prev) => {
        return [
          ...prev,
          name
        ]
      })
    } else {
      alert('Please Enter Task Name!');
    }
  };

  return (
    <>
      <div class="container">
        <h1 class="center">TodoMatic</h1>
        <form><h2 class="label-wrapper">
          <label for="new-todo-input" class="label">What needs to be done?</label></h2>
          <input type="text" name="text" value={name} autoComplete="off" onChange={(e) => setName(e.target.value)} /><br />
          <button type="button" class="btn mt-2 btn-dark" onClick={(e) => addTaskHandler(e)}>Add</button>
        </form>
      </div>
      <div className=''>
        <p>{allTasks.length} tasks pending!</p>
      </div>
      {allTasks.map((element, key) =>
        <div className='d-flex justify-content-between align-center'>
          <p key={key}>{element}</p>
          {/* <p onClick={()=>deleteEvent()}>delete</p> */}
          <AddTemplate />
        </div>
      )}
    </>
  )
}

export default TodoComponent

const AddTemplate=()=>{
  <>test addTemplate</>
}
