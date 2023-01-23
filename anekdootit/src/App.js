import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const listlength = anecdotes.length
  console.log(listlength)
  const stateinit = getRandomInt([0, listlength])
  const [selected, setSelected] = useState(stateinit)
  const handleClick = () => {
    setSelected(getRandomInt([0, listlength]))
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button setFunction={handleClick}/>
    </div>
  )
}

const getRandomInt = (props) => {
  const min = props[0]
  const max = props[1]
  const random = Math.random() * (max - min) + min
  const randInt = Math.floor(random)
  return randInt
}

const Button = ({ setFunction }) => (
  <button onClick={setFunction}>
    next anecdote
  </button>
)

export default App