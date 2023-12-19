import { useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('App render');

  return <div className="App"></div>;
}

export default App;
