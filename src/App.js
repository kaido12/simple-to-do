import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addTodo, removeTodo } from './Action/action';

function App() {

  const [ counter, setCounter ] = useState(0);
  const [todo , setTodo ] = useState("");

  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const submitHandler = () => {
    if (todo !== ""){
      dispatch(addTodo(counter, todo))
      setCounter(counter + 1);
      setTodo("");
    }
  };
  return (
    <>
      <div>
        <h1>To-Do</h1>
        <div className='add'>
          <input 
            type="text" 
            value={todo}
            placeholder= "enter Todo"
            onChange= {(e) => setTodo(e.target.value)}
          />

        </div>
        <button onClick={submitHandler}>Add</button>

        <div className='remove'>
          <ul>
              {todos?.map((todo) =>
              <li key={todo.id}>
                <p>{todo.task}</p>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>

              </li>
              )}
          </ul>
        </div>
      </div>
    </>
    
  );
}

export default App;
