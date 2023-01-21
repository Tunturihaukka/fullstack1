import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positives, setPositives] = useState(0)

  const handleGoodClick = () => {
    const values = [good+1, bad, allClicks+1]
    computeAvg(values)
    setGood(good + 1)
    setAll(allClicks + 1)
    setPositives(positives + 1)
  }
  const handleNeutralClick = () => {
    const values = [good, bad, allClicks+1]
    computeAvg(values)
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const handleBadClick = () => {
    const values = [good, bad+1, allClicks+1]
    computeAvg(values)
    setBad(bad + 1)
    setAll(allClicks + 1)
  }
  const computeAvg = (props) => {
    const average = (props[0]-props[1])/props[2]
    setAvg(average)
  }


  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>
        statistics
      </h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={allClicks} />
      <Display text="average" value={avg} />
      <Display text="positive" value={positives} />
    </div>
  )
}

export default App