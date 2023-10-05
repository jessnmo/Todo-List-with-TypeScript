import { ChangeEvent, FC, useState } from 'react';
import { ITask } from './interface';
import TaskList from './Components/TaskList';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask('');
    setDeadline(0);
  };

  const completedTask = (deleteTaskName: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== deleteTaskName;
      })
    );
  };

  return (
    <div className="App">
      <div className="inputContainer">
        <div className="header">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Days to Complete"
            name="number"
            value={deadline}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todoContainer">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TaskList key={key} task={task} completedTask={completedTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
