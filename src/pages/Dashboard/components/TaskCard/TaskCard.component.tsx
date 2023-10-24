import "./TaskCard.component.css";
interface Task {
  id?: string;
  task: string;
  selectedId: string | null;
}
interface ITaskCardProps {
  value: Task;
  selected?: boolean;

  onCardClick: () => void;
}

export const TaskCard = ({ value, selected, onCardClick }: ITaskCardProps) => {
  return (
    <div
      onClick={onCardClick}
      className={`content-cards__task ${selected ? "task__select" : ""}`}
    >
      <h4>{value.task}</h4>
      <label htmlFor="">8</label>
    </div>
  );
};
