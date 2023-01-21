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
      <Content part1={part1} part2={part2} part3={part3}/>
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

{/* Expects an object with attirbutes 'name' and 'exercises' */}
const Part = (part) => {
  return(
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

{/* Expects an object parts, which has 3 attributes (part1-3).*/}
{/* Those attributes are expected to be objects themselves,*/}
{/* and to have attributes 'name' and 'exercises'*/}
const Content = (parts) => {
  return(
    <div>
      <Part name={parts.part1.name} exercises={parts.part1.exercises}/>
      <Part name={parts.part2.name} exercises={parts.part2.exercises}/>
      <Part name={parts.part3.name} exercises={parts.part3.exercises}/>
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