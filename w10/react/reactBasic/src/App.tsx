import './App.css'
import MyButton from './learn/MyButton';
import List from './learn/List';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} handleClick={handleClick}/>
      <MyButton count={count} handleClick={handleClick}/>
      <List/>
    </div>
  );
}

export default App
