const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content ex1={part1.name} count1={part1.exercises} ex2={part2.name} count2={part2.exercises} ex3={part3.name} count3={part3.exercises} />
      <Total first={part1.exercises} second={part2.exercises} third = {part3.exercises}/>
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
      <Part ex={cont.ex2} count={cont.count2}/>
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