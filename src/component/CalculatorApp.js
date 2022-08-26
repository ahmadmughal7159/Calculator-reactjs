import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const CalculatorApp = () => {
  const [number, setNumber] = useState("");

  const handleclick = (event) => {
    setNumber(number.concat(event.target.value))
  }

  // handle clear 
  const handleClear = () => {
    setNumber("")
  }
  // handle slash 
  const handleslice = () => {
    setNumber(number.slice(0, -1))
  }
  // answer 
  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString())
    } catch (error) {
      setNumber('invalid')
    }
  }

  return (
    <>
      <section>
        <div className='bg-gray-900 w-96 h-screen mx-auto rounded-xl overflow-hidden mt-10'>
          <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-4 pl-2 sm:min-h-fit'>
            <GiHamburgerMenu />
            <p>
              CalculatorApp
            </p>
          </div>
          {/* screen  */}
          <div className='w-full h-20'>
            <input type="text"
              placeholder='0'
              value={number}
              className='w-full h-full border text-gray-200 border-white bg-gray-900 text-4xl text-right pr-5 '

            />

          </div>

          {/* key  */}
          <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
            <button onClick={handleClear} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
            <button onClick={handleslice} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
            <button onClick={handleclick} value='/' className='text-white w-20 h-20 bg-green-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
            <button onClick={handleclick} value='+' className='text-white w-20  bg-red-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2 h-44'>+</button>



            <button onClick={handleclick} value='9' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button>
            <button onClick={handleclick} value='8' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
            <button onClick={handleclick} value='7' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
            {/* <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button> */}



            <button onClick={handleclick} value='6' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
            <button onClick={handleclick} value='5' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
            <button onClick={handleclick} value='4' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
            <button onClick={handleclick} value='-' className='text-white w-20 h-20 bg-yellow-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>


            <button onClick={handleclick} value='3' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
            <button onClick={handleclick} value='2' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
            <button onClick={handleclick} value='1' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
            <button onClick={handleclick} value='*' className='text-white w-20 h-20 bg-orange-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

            <button onClick={handleclick} value='.' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
            <button onClick={handleclick} value='0' className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
            <button onClick={handleAnswer} className='text-black w-44 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>


          </div>
        </div>
      </section>
    </>
  )
}

export default CalculatorApp
// 