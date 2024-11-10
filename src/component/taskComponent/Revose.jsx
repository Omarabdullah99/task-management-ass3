import React, { useContext, useState } from "react";
import { taskListContext } from "../../context";
import EditTask from "./EditTask";

const Revise = () => {
  const { allTasks, setAllTask } = useContext(taskListContext);
  const [selectedId, setSelectedId] = useState(null);
  const revise = allTasks.filter((task) => task.status === "revise");
  return (
    <>
     {selectedId && (
        <EditTask selectedId={selectedId} setSelectedId={setSelectedId} />
      )}
    <div class="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div class="rounded-lg bg-rose-500 p-4">
        <div class="mb-2 flex items-center justify-between">
          <h3 class="text-lg font-semibold">Revise ({revise.length})</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l9 0" />
            <path d="M4 12l7 0" />
            <path d="M4 18l7 0" />
            <path d="M15 15l3 3l3 -3" />
            <path d="M18 6l0 12" />
          </svg>
        </div>
        <div>
          {revise.map((r) => (
            <div class="mb-4 rounded-lg bg-gray-800 p-4" key={r.id}>
              <div class="flex justify-between">
                <h4 class="mb-2 font-semibold text-rose-500">{r.title}</h4>
                <div class="flex gap-2">
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="h-4 w-4 cursor-pointer text-zinc-300"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>

                  <button className="cursor-pointer" onClick={()=>setSelectedId(r.id)}>
                    <svg
                      class="h-4 w-4 cursor-pointer text-zinc-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p class="mb-2 text-sm text-zinc-200">{r.description}</p>

              <p class="mt-6 text-xs text-zinc-400">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Revise;
