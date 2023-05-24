import { useEffect, useState } from 'react'

function HomePage() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <p>
        Venom welcomes all Web 3.0 users to join in the testing network and
        products developed on our blockchain. Join the Testnet of Venom
        Blockchain
      </p>
      {data.map((data, index) => (
        <li key={index}>
          {index} {data.name} {data.email} {data.body}
        </li>
      ))}
    </div>
  )
}

export default HomePage
