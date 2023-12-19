import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
