import ModulePage from '../ModulePage';
import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete quarterly report', completed: false },
    { id: 2, text: 'Follow up with client', completed: true },
    { id: 3, text: 'Update project documentation', completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ModulePage title="To-Do Lists" description="Manage your personal tasks">
      <div className="card">
        <div className="space-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 text-primary-600 rounded"
              />
              <span className={todo.completed ? 'text-gray-500 line-through flex-1' : 'text-gray-900 flex-1'}>
                {todo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ModulePage>
  );
};

export default Todos;

