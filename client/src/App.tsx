import { Routes, Route } from 'react-router-dom'
import './App.css'
import Suggestions from './routes/suggestions/Suggestions'

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Suggestions />} />

    </Routes>
  )
}

export default App
