import { useContext, createContext } from "react";

export const TodosContext = createContext({
    todos: [{
        id: 1,
        todo: "Todos Message",
        completed: false
    }],
    addtodo: (todo) => {},
    updatetodo: (todo, id) => {},
    deletetodo: (id) => {},
    togglecomplete: (id) => {

    }
})

export const TodosProvider = TodosContext.Provider;

export const useTodo = () => {
    return useContext(TodosContext)
}