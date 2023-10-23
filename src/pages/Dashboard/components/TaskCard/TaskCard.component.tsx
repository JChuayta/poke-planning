import "./TaskCard.component.css";
interface Task {
  id: number;
  task: string;
  selected: boolean;
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
