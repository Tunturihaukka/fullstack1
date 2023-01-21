const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
        <Header {...course}/>
        <Content {...course}/>
        <Total {...course}/>
    </div>
  )
}

{/* Expects an object having 2 attributes, from which the second should
 be ('parts') a list of three objects. Those objects should have 2 attributes
 each, named 'name' and 'exercises', respectively. */}
const Content = (contents) => {
  return(
    <div>
      <Part name={contents.parts[0].name} exercises={contents.parts[0].exercises}/>
      <Part name={contents.parts[1].name} exercises={contents.parts[1].exercises}/>
      <Part name={contents.parts[2].name} exercises={contents.parts[2].exercises}/>
    </div>
  )
}

{/* Expectations analogous to the 'Content' function */}
const Total = (contents) => {
  const amount1 = contents.parts[0].exercises
  const amount2 = contents.parts[1].exercises
  const amount3 = contents.parts[2].exercises
  return(
    <div>
      <p>
        Number of exercises {amount1 + amount2 + amount3}
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

{/* Expects an object having 2 attributes, from which the first should
 be ('name') a header for a listing. */}
const Header = (contents) => {
  return(
    <div>
      <h1><p>{contents.name}</p></h1>
    </div>
  )
}

export default App