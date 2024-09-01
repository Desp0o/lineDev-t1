import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#000000")

  const pickColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-center text-xl font-bold'>Pick color</h1>

        <div className='flex flex-col gap-3'>
          <input type='color' value={color} onChange={pickColor} />

          <div className='flex items-center gap-3'>
            <p>{color}</p>
            <div className='h-5 w-10 border-solid border-2' style={{ borderColor: color }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
