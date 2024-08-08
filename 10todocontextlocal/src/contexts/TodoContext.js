import { createContext, useContext } from "react";

export const ToDoContext = createContext({
     todoos:[
        { 
            id:1,
            todo: "to mgs",
            completed: false,

        }
     ],
     addTodo: (todo) => {},
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {}
    })

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider