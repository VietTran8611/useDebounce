import React, { useEffect, useState } from 'react'

const useDebounce =  (text,delay) =>{
    const [debounce,setDebounce] = useState(text)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounce(text)
        }, delay)

        return()=>{
            clearTimeout(timer)
        }

    },[text,delay])

    return debounce
}

export const Debounce = () => {
    const [text,setText] = useState()
    const debounceText = useDebounce(text,1000)

  return (
    <div>
        <h1>Debounce Hook Tester</h1>
        <input 
            type="text" 
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            placeholder='Type something'

        />
        <p>Debounce value: {debounceText}</p>
    </div>
  )
}
