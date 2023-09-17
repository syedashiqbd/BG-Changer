import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:bgColor}}>
      <div className=' flex justify-center inset-x-0 bottom-5 fixed '>
        <div className='flex flex-wrap justify-center gap-2 rounded-3xl px-3 py-2 bg-white'>
          <button onClick={()=>setBgColor('red')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full bg-red-600' >Red</button>
          <button onClick={()=>setBgColor('green')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full bg-green-600' >Green</button>
          <button onClick={()=>setBgColor('blue')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full bg-blue-600' >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
