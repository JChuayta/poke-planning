import {
  DocumentData,
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase/config";
import { TaskCard } from "../TaskCard/TaskCard.component";
import "./SideBar.component.css";

interface Task {
  id?: string;
  task: string;
  selectedId: string | null;
}

const SideBar = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const huRef = collection(db, "HU");

  const handleToggle = (id: string) => {
    const huRefUpdate = doc(db, "HU", id);
    const huSelected: Task | undefined = tasks.find(
      (objeto) => objeto.id === id
    );
    // esta medio raro hacerlo asi
    // se puede hacer lo mismo con solo cambiarlo con un boolean
    if (huSelected!.selectedId === id) {
      updateDoc(huRefUpdate, {
        selectedId: null,
      });
    } else {
      updateDoc(huRefUpdate, {
        selectedId: id,
      });
    }
  };

  const addTask = () => {
    if (inputTask.trim() !== "") {
      const newtask: Task = {
        task: inputTask,
        selectedId: null,
      };

      addDoc(huRef, newtask);

      setTasks([...tasks, newtask]);
      setInputTask("");
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(huRef, (snapshot) => {
      const hu: Task[] = snapshot.docs.map((doc: DocumentData) => {
        const hutemporal: Task = {
          ...doc.data(),
          id: doc.id,
        };
        return hutemporal;
      });

      setTasks(hu);
      console.log(hu, "historia de ususario");
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
              // selected={task.selected}
              selected={task.selectedId === task.id}
              onCardClick={() => handleToggle(task.id!)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
