import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    
    // El primer state almacena lo que se introduce en el inputText
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    // Se crea un segundo State que es un objeto
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000 },
        ]);
        //En esta linea de codigo se vuelve a poner en blanco el inputText que seria el primer state
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }



    return(
        <form>
            <input value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;