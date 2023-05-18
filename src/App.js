import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addTodo, deleteLastTodo } from "./toolkitSlice";
import { useState } from "react";

function App() {
  const [todo, AddTodo] = useState('');
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h11>{count}</h11>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(deleteLastTodo())}>Remove toDo</button>
      <input type="text" value={todo} onChange={(e)=> AddTodo(e.target.value)}/>
      <button onClick={() => dispatch(addTodo(todo))}>Add toDo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
