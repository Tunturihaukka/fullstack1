import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text, value }) => (
    <div>{text} {value}</div>
)

const ComputeAvg = (props) => {
  const { good, neutral, bad } = props
  const clicks = SumAll(props)
  return (
    (good-bad)/clicks
  )
}

const SumAll = ({ good, neutral, bad }) => (
  good + neutral + bad
)

const DisplayPositives = (props) => {
  const { good, neutral, bad } = props
  const clicks = SumAll(props)
  return (
    <div>
      positive {(good/clicks)*100} %
    </div>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props
  return (
    <div>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={SumAll(props)} />
      <Display text="average" value={ComputeAvg(props)} />
      <DisplayPositives {...props} />
    </div>
      
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
    ComputeAvg(values)
    setGood(good + 1)
    setAll(allClicks + 1)
    setPositives(positives + 1)
  }
  const handleNeutralClick = () => {
    const values = [good, bad, allClicks+1]
    ComputeAvg(values)
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const handleBadClick = () => {
    const values = [good, bad+1, allClicks+1]
    ComputeAvg(values)
    setBad(bad + 1)
    setAll(allClicks + 1)
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App