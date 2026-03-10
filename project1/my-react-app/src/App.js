
import { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from './form/TodoItem';

function App() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setLoading(true);
    
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>

      <h1>
        Simple todo list display</h1>
      {
        todos && todos.length>0 ?todos.map((todoItem) => <TodoItem name={todoItem}/>)
  

         : <p>No todos found.</p>
      }

    </div>
  );
}


export default App;
