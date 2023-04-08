import { useState } from "react"

function App() {
  let [work, setWork] = useState('')
  return (
    <div className="flex gap-2 justify-center border border-red-500 h-screen items-center">
      <input onChange={e => setWork(e.target.value)} value={work} className="outline-none border border-blue-600 px-4 py-2" type="text" />
      <button className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white" type="button">Add</button>
    </div>
  );
}

export default App;
