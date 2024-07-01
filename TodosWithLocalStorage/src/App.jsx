import { useEffect, useState } from 'react'
import './App.css'
import { TodosProvider } from './contexts/TodosContext'
import TodoForm from './components/TodoForm'
import TodosItem from './components/TodosItem'

function App() {
 const [todos, setTodos]=useState([])

const addtodo=(todo)=>{
  setTodos((prev)=> [{id:Date.now(), ...todo},...prev])
}


const updatetodo=(todo, id)=>{
    setTodos((prev)=>prev.map((prevtodos)=>(prevtodos.id===id ? todo:prevtodos)))
}


const deletetodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}


const togglecomplete=(id)=>{
  setTodos((prev)=>prev.map((prevtodos)=>prevtodos.id===id ? {...prevtodos, completed: !prevtodos.completed}:
prevtodos
))
}


useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
    setTodos(todos)
  }
},[])


useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos])


  return (
   <TodosProvider value={{todos,addtodo,deletetodo,updatetodo ,togglecomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodosItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodosProvider>
  )
}
export default App;
