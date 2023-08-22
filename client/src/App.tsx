import { Routes, Route } from 'react-router-dom'
import './App.css'
import Suggestions from './routes/suggestions/Suggestions'
import Roadmap from './routes/roadmap/Roadmap'
import FeedbackForm from './components/feedbackForm/FeedbackForm'
import Feedback from './routes/feedback/Feedback'

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
