
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <h1 className='text-3xl bg-orange-700 p-4 font-bold rounded-lg'>TodoUsingRedux-Toolkit</h1>
    <AddTodo/>
    <Todos/> 
    </>
  )
}

export default App
