import { useState } from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import TaskList from "./component/taskComponent/TaskList";
import { taskListContext } from "./context";
import { getAllTask } from "./data/allTask";

export default function App() {
  const allTask=getAllTask()
  const [allTasks,setAllTask]=useState(allTask)
  // console.log(allTasks)
  return (
    <>
    <taskListContext.Provider value={{allTasks,setAllTask}}>
    <div className="flex h-screen">
      <Sidebar />
      {/* Main Content */}
      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Top Header */}
        <Header />
        <TaskList />
      </main>
    </div>
    </taskListContext.Provider>
    </>
  );
}
