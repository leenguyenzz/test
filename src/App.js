import { Link, Route, Routes } from 'react-router-dom'
import About from './Component/About'
import ContactPage from './Component/ContactPage'
import HomePage from './Component/HomePage'
import GlobalStyle from './GlobalStyle'
function App() {
  return (
    <GlobalStyle>
      <div style={{ padding: 20 }} className="d-flex">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </GlobalStyle>
  )
}

export default App
