import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  useEffect(() => {
    getData()
    // addData()
    // deleteData()
  }, [])

  const deleteData = () => {
    fetch("http://localhost:3001/delete", {
      method: "delete",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: 'Luca',
      })
    })
    .then(data=>data.json())
    .then(data=> {
      console.log(data)
    })
  }
  const getData = () => {
    // fetch('http://localhost:3001/movies')
    fetch('https://backend-test-gcn12.herokuapp.com/movies')
    .then(data=>data.json())
    .then(data=> {
      console.log(data.res)
      setText(data)
    })
  }

  const addData = () => {
    fetch('http://localhost:3001/new-post', {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: 'Toy Story 4',
        year: '2019',
        runtime: 120,
      })
    }) 
    .then(data=>data.json())
    .then(data=> {
      console.log(data)
    })
  }

  return (
    <div className={styles.container}>
      {/* {text} */} 
      app
      {/* {text.map((item)=> {
        return(
          <div key={item.name}>
            {item.name}
            {item.runtime}
          </div>
        )
      })} */}
    </div>
  )
}
