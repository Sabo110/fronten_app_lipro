import './App.css'
import GenerateQuestionnaire from './pages/GenerateQuestionnaire'

import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Member from './pages/Member'
import Home from './pages/Home'
import Questionnaires from './pages/Questionnaires'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign_in/' element={<SignIn />}/>
        <Route path='/sign_up/' element={<SignUp />}/>
        <Route path='/member/' element={<GenerateQuestionnaire />}/>
        <Route path='/member/questionnaires/' element={<Questionnaires />}/>
      </Routes>
    </>
  )
}

export default App
