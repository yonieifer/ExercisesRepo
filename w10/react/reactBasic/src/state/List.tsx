import React from 'react'

const List = () => {
    const [list, setList] = React.useState<string[]>([])
    const [inputVal, setInputVal] = React.useState("")

    const saveVal = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setInputVal(e.target.value.trim())
    }

    const add = () => {
        if (inputVal === "") return
        setList((prevList => [...prevList, inputVal]))
        setInputVal("")
    }

    const remove = () => {
        if (inputVal === "") return
        setList((prevList => prevList.filter(p => p !== inputVal)))
        setInputVal("")
    }

  return (
    <>
    List:{list.join(", ")}
    <div>
        <label>
            <input onChange={saveVal} type="text" name="product" value={inputVal}/>
        </label>
    </div>
    <button onClick={add}>Add</button>
    <button onClick={remove}>Delete</button>
    </>
  )
}

export default List
