import { useEffect, useState } from 'react'

export default function Home() {
  const [text, setText] = useState([])
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [runtime, setRuntime] = useState('')
  useEffect(() => {
    getData()
  }, [])

  const deleteData = (movieName, index) => {
    // fetch("http://localhost:3001/delete", {
    fetch('https://server-test-2-gcn12.herokuapp.com/delete', {
      method: "delete",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: movieName,
      })
    })
    .then(data=>data.json())
    .then(data=> {
      console.log(data)
      const textCopy = [...text]
      textCopy.splice(index, 1)
      setText(textCopy)
    })
  }
  const getData = () => {
    // fetch('http://localhost:3001/movies')
    fetch('https://server-test-2-gcn12.herokuapp.com/movies')
    .then(data=>data.json())
    .then(data=> {
      console.log(data)
      setText(data)
    })
  }

  const getRoot = () => {
    // fetch('http://localhost:3001/movies')
    // fetch('https://backend-test-gcn12.herokuapp.com/movies')
    fetch('https://server-test-2-gcn12.herokuapp.com/')
    .then(data=>data.json())
    .then(data=> {
      console.log(data.info)
    })
  }

  const addData = () => {
    // fetch('http://localhost:3001/post', {
    fetch('https://server-test-2-gcn12.herokuapp.com/post', {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name,
        year,
        runtime,
      })
    }) 
    .then(data=>data.json())
    .then(data=> {
      setText([...text, data])
      console.log(data)
    })
  }

  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input onChange={(e)=>setName(e.target.value)} id='name' placeholder='name' />
      <label htmlFor='year'>Year</label>
      <input onChange={(e)=>setYear(e.target.value)} id='year' placeholder='year' />
      <label htmlFor='runtime'>Runtime</label>
      <input onChange={(e)=>setRuntime(e.target.value)} id='runtime' placeholder='runtime' />
      <button onClick={addData}>Send Data</button>
      {text.map((item, index)=> {
        return(
          <div style={{display: 'flex'}} key={item.name}>
            <div style={{marginRight: '5px'}}>
              {item.name}
            </div>
            <div style={{marginRight: '5px'}}>
              {item.release_year}
            </div>
            <div style={{marginRight: '5px'}}>
              {item.runtime}
            </div>
            <button onClick={()=>deleteData(item.name, index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
