import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import TaskList from "./component/taskComponent/TaskList";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Main Content */}
      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Top Header */}
        <Header />
        <TaskList />
      </main>
    </div>
  );
}
