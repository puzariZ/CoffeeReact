import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1> Coffee and React with vite| Avinash Pandey, Today in lecturn 1 and 2. I learnt about 
      React , why it is used.. basically for complex frontend solutions, It was created 
      by Facebook for solving Phantom message problem... it was basically if you 
      remember there was use to a facebopk messanger icon on the right top in facebook application
      so, if use cicked and see all messages after then it shows messages pending there
      so to counter that problem react was created.
      React is a library not a full fledged framework.
      React is like a cool dude but framework is like a soldier who know and follows rules only.
      React consists of manly 3 libraries
      1. React
      2. React-dom
      3. Recat native
      there are two ways to install react or create first react app 
      1. use basic= npx create-react-app 01basicreact "strict naming"
      2. using Vite ... npm create Vite@latest
      and after creating it by any of the following go to app.jason and read it.
      Start is for to run in dev env
      Build is for build for browser basically used in production
      eject... eject app from react.
    </h1>
  </div>
  )
}

export default App
