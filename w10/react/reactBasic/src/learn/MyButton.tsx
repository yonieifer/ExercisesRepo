interface BtnData {
  handleClick: () => void
  count: number
}


const MyButton = ({handleClick, count}: BtnData) => {
  return (
    <button onClick={handleClick}> Clicked {count} times</button>
    <input type="text" name="" id="" ref={}/>
  )
}

export default MyButton