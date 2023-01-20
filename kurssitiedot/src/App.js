const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content ex1={part1} count1={exercises1} ex2={part2} count2={exercises2} ex3={part3} count3={exercises3} />
      <Total first={exercises1} second={exercises2} third = {exercises3}/>
    </div>
  )
}

const Total = (exs) => {
  return(
    <div>
      <p>
        Number of exercises {exs.first + exs.second + exs.third}
      </p>
    </div>
  )
}

const Part = (part) => {
  return(
    <div>
      <p>
        {part.ex} {part.count}
      </p>
    </div>
  )
}

const Content = (cont) => {
  return(
    <div>
      <Part ex={cont.ex1} count={cont.count1}/>
      <Part ex={cont.ex2} count={cont.count2 + 5}/>
      <Part ex={cont.ex3} count={cont.count3}/>
    </div>
  )
}

const Header = (header) => {
  return(
    <div>
      <h1><p>{header.course}</p></h1>
    </div>
  )
}

export default App