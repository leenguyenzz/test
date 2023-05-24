import { useEffect, useState } from 'react'

function ContactPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Venom Foundation is licensed under the Abu Dhabi Global Market (ADGM)
        framework is and dedicated to the development and launch of the Venom
        blockchain, providing scalable and secure solutions for real-world
        applications. To learn more about our policies, click on Privacy Policy
      </p>
      {data.map((d, i) => (
        <li key={i}>
          {i} {d.title} {d.thumbnailUrl}
        </li>
      ))}
    </div>
  )
}

export default ContactPage
