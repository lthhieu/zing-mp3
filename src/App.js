import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [work, setWork] = useState('')
  let [todos, setTodos] = useState([])
  let [count, setCount] = useState(0)
  let handleClick = () => {
    if (work === '') {
      toast.error("This work is blank")
    } else if (todos?.some(item => item.work === work)) {
      toast.error("This work is exist")
    } else {
      let id = count
      setTodos(prev => [...prev, { id, work }])
      setWork('')
      setCount(count + 1)
      toast.success('Created successfully')
    }
  }
  let handleDelete = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
    toast.success('Deleted successfully')
  }
  return (
    <div className="flex flex-col gap-2 justify-center h-screen items-center">
      <div className="flex gap-2">
        <input onChange={e => setWork(e.target.value)} value={work} className="outline-none border border-blue-600 px-4 py-2 w-[400px]" type="text" />
        <button onClick={handleClick} className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white" type="button">Add</button>
      </div>
      <ul className="flex flex-col gap-4">
        {todos?.length > 0 ? todos.map(x => {
          return (<li key={x.id} className="flex gap-10 items-center">
            <span>{x.work}</span>
            <span onClick={() => handleDelete(x.id)} className="cursor-pointer">X</span></li>)
        }) : <></>}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App;
