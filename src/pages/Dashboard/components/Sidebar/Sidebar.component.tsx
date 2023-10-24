import { useEffect, useState } from "react";
import { socket } from "../../DashboardPage";
import { TaskCard } from "../TaskCard/TaskCard.component";
import "./SideBar.component.css";

interface Task {
  id: number;
  task: string;
  selected: boolean;
}

const SideBar = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    console.log(id, "id");
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const emitToggleButton = (id: number) => {
    console.log("click");
    socket.emit("select-hu", id, (payload: number) => {
      console.log(payload, "lo que trae del");
      handleToggle(payload);
    });
  };

  const addTask = () => {
    if (inputTask.trim() !== "") {
      const newtask: Task = {
        id: tasks.length + 1,
        task: inputTask,
        selected: false,
      };
      // socket.emit("add-hu", newtask);
      socket.emit("add-hu", newtask, (payload: Task) => {
        setTasks([...tasks, payload]);
      });
      // emitir(newtask);
      setInputTask("");
    }
  };

  // const emitir = (tasks: Task) => {
  //   socket.emit("add-hu", tasks, () => {});
  // };
  useEffect(() => {
    socket.on("select-hu-card", (payload) => {
      handleToggle(payload);
    });
  }, []);

  useEffect(() => {
    socket.on("list-hu", (payload) => {
      console.log(payload);
      setTasks([...tasks, payload]);
    });
  }, [tasks]);

  return (
    <div className="content__sidebar">
      <div className="sidebar__hu">
        <h3>Historia de Usuario</h3>

        <input
          className="hu__input"
          type="text"
          placeholder="Nueva tarea"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button
          className={`hu__button ${
            inputTask.trim() === "" ? "button__disabled" : ""
          }`}
          onClick={addTask}
        >
          añadir HU
        </button>
        <div className="hu__content-cards">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              value={task}
              selected={selectedId === task.id}
              onCardClick={() => emitToggleButton(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
