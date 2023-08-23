import { Routes, Route } from 'react-router-dom'
import Suggestions from './routes/suggestions/Suggestions'
import Roadmap from './routes/roadmap/Roadmap'
import FeedbackForm from './routes/feedbackForm/FeedbackForm'
import Feedback from './routes/feedback/Feedback'
import './App.css'

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Suggestions />} />

      <Route path='/roadmap' element={<Roadmap />} />

      <Route path='/new' element={<FeedbackForm />} />

      <Route path='/edit' element={<FeedbackForm />} />

      <Route path='/:id' element={<Feedback />} />

    </Routes>
  )
}

export default App
