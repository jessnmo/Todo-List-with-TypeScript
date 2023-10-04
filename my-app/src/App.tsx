import { FC, useState } from 'react';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  return (
    <div className="App">
      <div className="inputContainer">
        <div className="header">
          <input type="text" placeholder="Task" />
          <input type="number" placeholder="Days to Complete" />
          <button>Add Task</button>
        </div>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
