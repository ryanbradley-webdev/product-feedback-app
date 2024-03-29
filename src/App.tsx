import { useState, useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Suggestions from './routes/suggestions/Suggestions'
import Roadmap from './routes/roadmap/Roadmap'
import FeedbackForm from './routes/feedbackForm/FeedbackForm'
import Feedback from './routes/feedback/Feedback'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import './App.css'
import { UserContext } from './contexts/UserContext'

function App() {
  const {
    user
  } = useContext(UserContext)
  
  const [loginVisible, setLoginVisible] = useState(false)
  const [loginVariant, setLoginVariant] = useState<'login' | 'create'>('login')

  const toggleLoginModal = () => {
    setLoginVisible(!loginVisible)
  }

  useEffect(() => {
    if (user && loginVisible) {
      setLoginVisible(false)
    }
  }, [user, loginVisible])

  return (
    <>
      <Routes>
        
        <Route path='/' element={<Suggestions toggleModal={toggleLoginModal} />} />

        <Route path='/roadmap' element={<Roadmap />} />

        <Route path='/new' element={<FeedbackForm />} />

        <Route path='/edit' element={<FeedbackForm />} />

        <Route path='/:id' element={<Feedback />} />

      </Routes>

      <Footer
        toggleModal={toggleLoginModal}
        setVariant={setLoginVariant}
      />

      <Login
        visible={loginVisible}
        closeModal={toggleLoginModal}
        variant={loginVariant}
        setVariant={setLoginVariant}
      />
    </>
  )
}

export default App
