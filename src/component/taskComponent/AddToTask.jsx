import React, { useContext, useState } from "react";
import { taskListContext } from "../../context";

const AddToTask = ({setAddTaskShow}) => {
  const {allTasks,setAllTask}=useContext(taskListContext)
  const [formValue,setFormValue]=useState({
    title:'',
    description:'',
    date:'',
    status:""

  })

  function handleChange(e){
    const{name,value}=e.target;
    setFormValue((prevValue)=>({
      ...prevValue,
      [name]:value
    }))
  }
  // console.log(formValue.date,formValue.status)

  function handleAddTask(e){
    e.preventDefault()
    const newTask={id:crypto.randomUUID(), title:formValue.title, description:formValue.description, date:formValue.date, status:formValue.status}
    // console.log(newTask)
    setAllTask((prev)=>[...prev, newTask])
    setAddTaskShow(false)

  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="p-6 rounded-lg bg-gray-800 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form onSubmit={handleAddTask}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValue.title}
                onChange={handleChange}
                
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formValue.description}
                onChange={handleChange}
                
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formValue.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                status
              </label>
              <select
                id="status"
                name="status"
                value={formValue.status}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="todo">To-Do</option>
                <option value="onprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revise">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
              onClick={()=>setAddTaskShow(false)}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToTask;
