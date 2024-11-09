import React, { useState } from "react";
import Todo from "./Todo";
import AddToTask from "./AddToTask";

const TaskList = () => {
  const [addTaskShow,setAddTaskShow]=useState(true)
  return (
    <>
    {addTaskShow && <AddToTask setAddTaskShow={setAddTaskShow}/>}
     {/* Project Content */}
    <div class="mx-auto max-w-7xl p-6">
      {/* Add to task */}
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold">Projectify</h2>
        <div class="flex space-x-2">
          <button onClick={()=>setAddTaskShow(true)} class="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>
    {/* Add to task end */}
      <div class="-mx-2 mb-6 flex flex-wrap">
        <Todo />
      </div>
    </div>
    </>
  );
};

export default TaskList;
