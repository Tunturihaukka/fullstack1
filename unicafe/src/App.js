import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const valueParser = ({text, value}) => {
  if (text == "positive")
    return (
        value + " %"
    )
  return (
        value
  )
}

const StatisticLine = (props) => {
  const { text, value} = props
  const secondcolumn = valueParser(props)
  return (
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {secondcolumn}
        </td>
      </tr>
    </tbody>
  )
}

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

const ComputePositives = (props) => {
  const { good, neutral, bad } = props
  const clicks = SumAll(props)
  return (
    (good/clicks)*100
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const feedbacks = SumAll(props)
  const avg = ComputeAvg(props)
  const pos = ComputePositives(props)
  if (feedbacks == 0)
    return <div>No feedback given</div>
  return (
    <table cellSpacing="1" cellPadding="1">
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={feedbacks} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={pos} />
    </table>
      
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