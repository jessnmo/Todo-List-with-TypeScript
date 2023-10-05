import { ITask } from '../interface';

interface Props {
  task: ITask;
  completedTask(deleteTaskName: string): void;
}

const TaskList = ({ task, completedTask }: Props) => {
  return (
    <div className="taskContainer">
      <div className="taskList">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completedTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TaskList;
