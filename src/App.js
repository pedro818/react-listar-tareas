import React, { useState,useEffect } from 'react';
import './App.css';
//Importando componentes
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    getlocalTodos();
  },[]);

  //Use Effect
  useEffect(() => {
    filterHandler();
    savelocalTodos();
  }, [todos, status]);

  //Funciones
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true )); 
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  };

  //Guardar en el localStorage
  const savelocalTodos = () => {
      localStorage.setItem("todos",JSON.stringify(todos));
    
  };

  const getlocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolocal);
    }
  };



  return (
    <div className="App">
      <header>
        <h1>Listar Tareas</h1>
      </header>
      <Form
      inputText = {inputText}
       todos = {todos} 
       setTodos = {setTodos} 
       setInputText = {setInputText}
       setStatus = {setStatus}
      
       />
      <TodoList 
      setTodos={setTodos}
      todos={todos} 
      filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
